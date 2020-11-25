package main

import (
	"ourfood-api/controller"
	"ourfood-api/middleware"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// SetupRoutes registra todas as rotas da API no App do Fiber
func SetupRoutes(app *fiber.App) {
	api := app.Group("/v1", logger.New())

	foods := api.Group("/foods")
	foods.Get("/", controller.GetFoods)
	foods.Get("/:food", controller.GetFoodByID)

	restaurants := api.Group("/restaurants")
	restaurants.Get("/", controller.GetRestaurants)
	restaurants.Get("/:restaurant", controller.GetRestaurantByID)
	restaurants.Get("/:restaurant/foods", controller.GetFoodsByRestaurant)
	restaurants.Post("/:restaurant/foods", middleware.AuthenticateRestaurant, controller.CreateFood)
	restaurants.Put("/:restaurant/foods/:food", middleware.AuthenticateRestaurant, controller.UpdateFood)
	restaurants.Delete("/:restaurant/foods/:food", middleware.AuthenticateRestaurant, controller.DeleteFood)

	orders := api.Group("/orders")
	orders.Post("/", middleware.AuthenticatedUsers, controller.CreateOrder)

	users := api.Group("/users")
	users.Get("/", controller.GetUsers)
	users.Post("/", controller.CreateUser)
}
