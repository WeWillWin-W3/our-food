package controller

import (
	"our-food-api/model"

	"github.com/gofiber/fiber/v2"
)

func CreateOrder(c *fiber.Ctx) error {
	var orderData model.OrderData

	if err := c.BodyParser(&orderData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	order, err := model.CreateOrder(orderData)

	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	c.SendStatus(fiber.StatusCreated)
	return c.JSON(order)
}
