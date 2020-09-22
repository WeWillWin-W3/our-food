package main

import (
	"our-food-api/database"

	"log"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	if err := database.ConnectDB(); err != nil {
		panic(err)
	}

	app := fiber.New()
	app.Use(cors.New())

	SetupRoutes(app)
	log.Fatal(app.Listen(":3000"))
}