package controller

import (
	"our-food-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

// GetFoods lista todas as comidas registradas na aplicação.
// Comidas podem ser filtradas por nome (ex.: ?name=marguerita) ou por categoria (ex.: ?category=pizza)
func GetFoods(c *fiber.Ctx) error {
	var foods []model.Food
	var err error

	if foodName := c.Query("name"); foodName != "" {
		foods, err = model.GetFoodByName(foodName)
	} else if foodCategory := c.Query("category"); foodCategory != "" {
		foods, err = model.GetFoodByCategory(foodCategory)
	} else {
		foods, err = model.GetAllFoods()
	}

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(foods)
}

// GetFoodsByRestaurant lista todas as comidas registradas em um restaurante.
// Comidas podem ser filtradas por categoria (ex.: ?category=pizza)
func GetFoodsByRestaurant(c *fiber.Ctx) error {
	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	var foods []model.Food

	if foodCategory := c.Query("category"); foodCategory != "" {
		foods, err = model.GetFoodByRestaurantAndCategory(uint32(restaurantID), foodCategory)
	} else {
		foods, err = model.GetFoodByRestaurantID(uint32(restaurantID))
	}

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(foods)
}

func GetFoodByID(c *fiber.Ctx) error {
	foodID, err := strconv.Atoi(c.Params("food"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	food, err := model.GetFoodByID(uint32(foodID))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(food)
}

func CreateFood(c *fiber.Ctx) error {
	var foodData model.FoodData

	if err := c.BodyParser(&foodData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

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

	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

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
