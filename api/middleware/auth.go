package middleware

import (
	"ourfood-api/model"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/basicauth"
)

func UsersBasicAuth(c *fiber.Ctx) error {
	users, err := model.GetAllUsers()

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	usersMap := make(map[string]string)
	usersID := make(map[string]uint32)

	for _, user := range users {
		usersMap[user.Email] = string(user.Password)
		usersID[user.Email] = user.ID
	}

	return basicauth.New(basicauth.Config{
		Users: usersMap,
		Authorizer: func(user, pass string) bool {
			authorized := model.CompareHashPassword(usersMap[user], pass)

			if authorized {
				c.Locals("user_id", usersID[user])
			}

			return authorized
		},
		ContextUsername: "email",
	})(c)
}

func getTokenByAuthorizationHeader(header string) (*model.AuthToken, error) {
	if header == "" {
		return nil, fiber.NewError(fiber.StatusBadRequest, "Um token deve ser fornecido")
	}

	splitToken := strings.Split(header, "Bearer ")

	if len(splitToken) < 2 {
		return nil, fiber.NewError(fiber.StatusBadRequest, "Token mal-formatado")
	}

	reqToken := splitToken[1]

	return model.GetAuthTokenByToken(reqToken)
}

func getUserTokenByAuthorizationHeader(header string) (*model.AuthToken, *model.User, error) {
	token, err := getTokenByAuthorizationHeader(header)

	if err != nil {
		return nil, nil, err
	}

	user, err := model.GetUserByID(token.UserID)

	return token, user, err
}

func UsersAuthToken(c *fiber.Ctx) error {
	_, user, err := getUserTokenByAuthorizationHeader(c.Get("Authorization"))

	if err != nil {
		return fiber.NewError(fiber.StatusForbidden, "Token inválido")
	}

	// TODO: Expiração do token, etc

	c.Locals("user", user)

	return c.Next()
}

func UsersAuthTokenByID(c *fiber.Ctx) error {
	userID, err := strconv.Atoi(c.Params("user"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	_, user, err := getUserTokenByAuthorizationHeader(c.Get("Authorization"))

	if err != nil {
		return fiber.NewError(fiber.StatusForbidden, "Token inválido")
	}

	if user.ID != uint32(userID) {
		return fiber.NewError(fiber.StatusForbidden, "Permissão insuficiente")
	}

	// TODO: Expiração do token, etc

	c.Locals("user", user)

	return c.Next()
}

func RestaurantsAuthToken(c *fiber.Ctx) error {
	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	restaurant, err := model.GetRestaurantByID(uint32(restaurantID))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	token, user, err := getUserTokenByAuthorizationHeader(c.Get("Authorization"))

	if err != nil {
		return err
	}

	if token.UserID != restaurant.UserID {
		return fiber.NewError(fiber.StatusForbidden, "Credenciais inválidas")
	}

	c.Locals("user", user)

	return c.Next()
}
