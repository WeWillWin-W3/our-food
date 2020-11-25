package main

import (
	"our-food-api/model"

	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	if err := model.ConnectDB(); err != nil {
		log.Fatal(err)
	}

	app := fiber.New()
	app.Use(cors.New())

	SetupRoutes(app)

	log.Fatal(app.Listen(":3000"))
}
