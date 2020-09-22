package main

import (
	"our-food-api/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// SetupRoutes registra todas as rotas da API no App do Fiber
func SetupRoutes(app *fiber.App) {
	api := app.Group("/v1", logger.New())

	restaurants := api.Group("/restaurants")
	restaurants.Get("/", handler.GetRestaurants)
	restaurants.Get("/:restaurant/foods/", handler.GetFoods)
	restaurants.Post("/:restaurant/foods/", handler.CreateFood)
	restaurants.Put("/:restaurant/foods/:food", handler.UpdateFood)
	restaurants.Delete("/:restaurant/foods/:food", handler.DeleteFood)

	orders := api.Group("/orders")
	orders.Post("/", handler.CreateOrder)

	users := api.Group("/users")
	users.Get("/", handler.GetUsers)
	users.Post("/", handler.CreateUser)

}