package controller

import (
	"ourfood-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetUserByID(c *fiber.Ctx) error {
	userID, err := strconv.Atoi(c.Params("user"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	user, err := model.GetUserByID(uint32(userID))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(user)
}

// CreateUser registra um usuário novo na aplicação.
// O role do usuário é atribuido através pela query (?role=1)
func CreateUser(c *fiber.Ctx) error {
	var userData model.UserData
	var role model.Role

	roleQuery := c.Query("role")

	if roleQuery == "" {
		role = model.ClientRole
	} else {
		role = model.RestaurantRole
	}

	if err := c.BodyParser(&userData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	user, err := model.CreateUser(userData, model.Role(role))

	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	c.SendStatus(fiber.StatusCreated)
	return c.JSON(user)
}

func AuthenticateUser(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint32)

	authToken, err := model.CreateAuthToken(userID)

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(authToken)
}
