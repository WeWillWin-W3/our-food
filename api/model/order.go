package model

import "time"

type OrderData struct {
	UserID       uint32 `json:"user_id"`
	LocationID   uint32 `json:"location_id"`
	RestaurantID uint32 `json:"restaurant_id"`
	Location     string `json:"location" validate:"required"`
	UserID       uint32 `json:"user_id" validate:"required"`
	RestaurantID uint32 `json:"restaurant_id" validate:"required"`
}

type Order struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	OrderData
	Rating    float32   `json:"rating"`
	CreatedAt time.Time `json:"created_at"`
}

func NewOrder(orderData OrderData) (*Order, error) {
	return &Order{
		Rating:    0,
		CreatedAt: time.Now(),
		OrderData: orderData,
	}, nil
}

func CreateOrder(orderData OrderData) (*Order, error) {
	err := defaultValidate.Struct(orderData)

	if err != nil {
		return nil, err
	}

	order, err := NewOrder(orderData)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&order).Error; err != nil {
		return nil, err
	}

	return order, nil
}
