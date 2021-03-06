package controller

import (
	"ourfood-api/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

// GetRestaurants lista todos os restaurants registradas na aplicação.
// Restaurantes podem ser filtradas por nome (ex.: ?name=pizzaria)
func GetRestaurants(c *fiber.Ctx) error {
	var restaurants []model.Restaurant
	var err error

	if restaurantName := c.Query("name"); restaurantName != "" {
		restaurants, err = model.GetRestaurantByName(restaurantName)
	} else {
		restaurants, err = model.GetAllRestaurants()
	}

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(restaurants)
}

func GetRestaurantByID(c *fiber.Ctx) error {
	restaurantID, err := strconv.Atoi(c.Params("restaurant"))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	restaurant, err := model.GetRestaurantByID(uint32(restaurantID))

	if err != nil {
		return fiber.NewError(fiber.StatusInternalServerError, err.Error())
	}

	return c.JSON(restaurant)
}

func CreateRestaurant(c *fiber.Ctx) error {
	user := c.Locals("user").(*model.User)

	var restaurantData model.RestaurantData

	if err := c.BodyParser(&restaurantData); err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	restaurantData.UserID = user.ID

	restaurant, err := model.CreateRestaurant(restaurantData)

	if err != nil {
		return fiber.NewError(fiber.StatusBadRequest, err.Error())
	}

	c.SendStatus(fiber.StatusCreated)
	return c.JSON(restaurant)
}
