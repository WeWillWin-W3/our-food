package controller

import (
	"our-food-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetFoods(c *fiber.Ctx) error {
	foods, err := model.GetAllFoods()

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(foods)
}

func CreateFood(c *fiber.Ctx) error {
	var foodData model.FoodData

	if err := c.BodyParser(&foodData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	restaurantID, err := strconv.Atoi(c.Params("restaurants"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	food, err := model.CreateFood(foodData, uint32(restaurantID))

	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	c.SendStatus(fiber.StatusCreated)
	return c.JSON(food)
}

func UpdateFood(c *fiber.Ctx) error {
	var foodData model.FoodData

	if err := c.BodyParser(&foodData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	restaurantID, err := strconv.Atoi(c.Params("restaurants"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	foodID, err := strconv.Atoi(c.Params("food"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	food := model.Food{uint32(foodID), foodData, uint32(restaurantID)}

	if err := model.UpdateFood(food); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.SendStatus(fiber.StatusOK)
}

func DeleteFood(c *fiber.Ctx) error {
	foodID, err := strconv.Atoi(c.Params("food"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	if err := model.DeleteFood(uint32(foodID)); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	return c.SendStatus(fiber.StatusOK)
}
