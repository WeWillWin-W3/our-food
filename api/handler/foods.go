package handler

import (
	"github.com/gofiber/fiber/v2"
)

func GetFoods(c *fiber.Ctx) error {
	return c.JSON("GetFoods")
}

func CreateFood(c *fiber.Ctx) error {
	return c.JSON("CreateFood")
}

func UpdateFood(c *fiber.Ctx) error {
	return c.JSON("UpdateFood")
}

func DeleteFood(c *fiber.Ctx) error {
	return c.JSON("DeleteFood")
}
