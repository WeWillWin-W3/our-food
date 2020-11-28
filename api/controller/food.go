package controller

import (
	"ourfood-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

// GetFoods lista todas as comidas registradas na aplicação.
// Comidas podem ser filtradas por nome (ex.: ?name=marguerita) ou por categoria (ex.: ?category=pizza)
func GetFoods(c *fiber.Ctx) error {
	var foods []model.Food
	var err error

	foodName := c.Query("name")
	foodCategory := c.Query("category")

	if foodName != "" || foodCategory != "" {
		foods, err = model.GetFoodByNameAndCategory(foodName, foodCategory)
	} else {
		foods, err = model.GetAllFoods()
	}

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(foods)
}

func GetFoodCategories(c *fiber.Ctx) error {
    categories, err := model.GetFoodCategories()

    if err != nil {
        return fiber.NewError(fiber.StatusInternalServerError, err.Error())
    }

    return c.JSON(categories)
}

// GetFoodsByRestaurant lista todas as comidas registradas em um restaurante.
// Comidas podem ser filtradas por categoria (ex.: ?category=pizza)
func GetFoodsByRestaurant(c *fiber.Ctx) error {
	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	foodCategory := c.Query("category")

	foods, err := model.GetFoodByRestaurantAndCategory(uint32(restaurantID), foodCategory)

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
