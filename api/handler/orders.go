package handler

import (
	"github.com/gofiber/fiber/v2"
)

func CreateOrder(c *fiber.Ctx) error {
	return c.JSON("CreateOrder")
}