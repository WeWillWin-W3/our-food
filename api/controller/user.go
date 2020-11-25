package controller

import (
	"github.com/gofiber/fiber/v2"
)

func GetUsers(c *fiber.Ctx) error {
	return c.JSON("GetUsers")
}

func CreateUser(c *fiber.Ctx) error {
	return c.JSON("CreateUser")
}
