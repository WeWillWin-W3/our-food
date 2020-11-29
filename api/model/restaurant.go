package model

import (
	"fmt"
)

type RestaurantData struct {
	Name        string `json:"name" validate:"required"`
	Description string `json:"description"`
	CNPJ        string `json:"cnpj" validate:"required"`
	Phone       string `json:"phone" validate:"required"`
	Location    string `json:"location" validate:"required"`
	UserID      uint32 `json:"user_id"`
	Category    string `json:"category"`
}

type Restaurant struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	RestaurantData
	Rating     float32 `json:"rating"`
}

func NewRestaurant(restaurantData RestaurantData) (*Restaurant, error) {
	return &Restaurant{
		Rating:         0,
		RestaurantData: restaurantData,
	}, nil
}

func GetAllRestaurants() ([]Restaurant, error) {
	var restaurants []Restaurant

	if err := DB.Find(&restaurants).Error; err != nil {
		return nil, err
	}

	return restaurants, nil
}

func GetRestaurantByName(name string) ([]Restaurant, error) {
	var restaurants []Restaurant

	query := fmt.Sprintf("%%%s%%", name)

	if err := DB.Where("name ILIKE ?", query).Find(&restaurants).Error; err != nil {
		return nil, err
	}

	return restaurants, nil
}

func GetRestaurantByID(id uint32) (*Restaurant, error) {
	var restaurant Restaurant

	if err := DB.First(&restaurant, id).Error; err != nil {
		return nil, err
	}

	return &restaurant, nil
}

func CreateRestaurant(restaurantData RestaurantData) (*Restaurant, error) {
	err := defaultValidate.Struct(restaurantData)

	if err != nil {
		return nil, err
	}

	restaurant, err := NewRestaurant(restaurantData)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&restaurant).Error; err != nil {
		return nil, err
	}

	return restaurant, nil
}
