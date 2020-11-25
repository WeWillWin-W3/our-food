package model

import (
	"fmt"
)

type RestaurantData struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	CNPJ        string `json:"cnpj"`
	Phone       string `json:"phone"`
}

type Restaurant struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	RestaurantData
	Rating     float32 `json:"rating"`
	LocationID uint32  `json:"location_id"`
	UserID     uint32  `json:"user_id"`
}

func NewRestaurant(restaurantData RestaurantData, locationID, userID uint32) (*Restaurant, error) {
	return &Restaurant{
		Rating:         0,
		RestaurantData: restaurantData,
		LocationID:     locationID,
		UserID:         userID,
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
