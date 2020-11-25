package main

import (
	"our-food-api/controller"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// SetupRoutes registra todas as rotas da API no App do Fiber
func SetupRoutes(app *fiber.App) {
	api := app.Group("/v1", logger.New())

	restaurants := api.Group("/restaurants")
	restaurants.Get("/", controller.GetRestaurants)
	restaurants.Get("/:restaurant/foods/", controller.GetFoods)
	restaurants.Post("/:restaurant/foods/", controller.CreateFood)
	restaurants.Put("/:restaurant/foods/:food", controller.UpdateFood)
	restaurants.Delete("/:restaurant/foods/:food", controller.DeleteFood)

	orders := api.Group("/orders")
	orders.Post("/", controller.CreateOrder)

	users := api.Group("/users")
	users.Get("/", controller.GetUsers)
	users.Post("/", controller.CreateUser)

}
