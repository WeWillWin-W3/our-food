package model

import "time"

type OrderData struct {
	UserID       uint32 `json:"user_id"`
	LocationID   uint32 `json:"location_id"`
	RestaurantID uint32 `json:"restaurant_id"`
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
	order, err := NewOrder(orderData)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&order).Error; err != nil {
		return nil, err
	}

	return order, nil
}
