package model

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB  *gorm.DB
	DSN = "host=localhost user=user password=secret dbname=ourfood port=5432 sslmode=disable"
)

func ConnectDB() error {
	db, err := gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if err != nil {
		return err
	}

	DB = db

	return nil
}
