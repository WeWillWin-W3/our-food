package middleware

import (
	"ourfood-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/basicauth"
)

func AuthenticatedUsers(c *fiber.Ctx) error {
	users, err := model.GetAllUsers()

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	usersMap := make(map[string]string)

	for _, user := range users {
		usersMap[user.Email] = string(user.Password)
	}

	return basicauth.New(basicauth.Config{
		Users: usersMap,
		Authorizer: func(user, pass string) bool {
			return model.CompareHashPassword([]byte(usersMap[user]), pass)
		},
	})(c)
}

func AuthenticateRestaurant(c *fiber.Ctx) error {
	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	restaurant, err := model.GetRestaurantByID(uint32(restaurantID))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	user, _ := model.GetUserByID(restaurant.UserID)

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	usersMap := make(map[string]string)
	usersMap[user.Email] = string(user.Password)

	return basicauth.New(basicauth.Config{
		Users: usersMap,
		Authorizer: func(user, pass string) bool {
			return model.CompareHashPassword([]byte(usersMap[user]), pass)
		},
	})(c)
}
