package controller

import (
	"ourfood-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetUsers(c *fiber.Ctx) error {
	users, err := model.GetAllUsers()

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(users)
}

func CreateUser(c *fiber.Ctx) error {
	var userData model.UserData

	role, err := strconv.Atoi(c.Query("role"))

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
