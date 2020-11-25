package controller

import (
	"github.com/gofiber/fiber/v2"
)

func GetRestaurants(c *fiber.Ctx) error {
	return c.JSON("GetRestaurants")
}
