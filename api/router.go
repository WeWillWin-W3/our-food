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
	foods.Get("/categories", controller.GetFoodCategories)

	restaurants := api.Group("/restaurants")
	restaurants.Get("/", controller.GetRestaurants)
	restaurants.Post("/", middleware.RestaurantsAuthToken, controller.CreateRestaurant)
	restaurants.Get("/:restaurant", controller.GetRestaurantByID)
	restaurants.Get("/:restaurant/foods", controller.GetFoodsByRestaurant)
	restaurants.Post("/:restaurant/foods", middleware.RestaurantsAuthTokenByID, controller.CreateFood)
	restaurants.Put("/:restaurant/foods/:food", middleware.RestaurantsAuthTokenByID, controller.UpdateFood)
	restaurants.Delete("/:restaurant/foods/:food", middleware.RestaurantsAuthTokenByID, controller.DeleteFood)

	orders := api.Group("/orders")
	orders.Post("/", middleware.UsersAuthToken, controller.CreateOrder)

	users := api.Group("/users")
	users.Get("/:user", middleware.UsersAuthTokenByID, controller.GetUserByID)
	users.Post("/", controller.CreateUser)
	users.Post("/authenticate", middleware.UsersBasicAuth, controller.AuthenticateUser)
}
