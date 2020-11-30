package model

import "fmt"

type FoodData struct {
	Name        string  `json:"name" validate:"required"`
	Description string  `json:"description"`
	Category    string  `json:"category" validate:"required"`
	Price       float64 `json:"price" validate:"required,gte=0"`
}

type Food struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	FoodData
	RestaurantID uint32 `json:"restaurant_id"`
}

func NewFood(foodData FoodData, restaurantID uint32) (*Food, error) {
	return &Food{
		FoodData:     foodData,
		RestaurantID: restaurantID,
	}, nil
}

func GetAllFoods() ([]Food, error) {
	var foods []Food

	if err := DB.Find(&foods).Error; err != nil {
		return nil, err
	}

	return foods, nil
}

func GetFoodCategories() ([]string, error) {
	var categories []string

	if err := DB.Model(&Food{}).Pluck("category", &categories).Error; err != nil {
		return nil, err
	}

	return categories, nil
}

func GetFoodByNameAndCategory(name, category string) ([]Food, error) {
	var foods []Food

	nameQuery := fmt.Sprintf("%%%s%%", name)
	categoryQuery := fmt.Sprintf("%%%s%%", category)

	if err := DB.Where("name ILIKE ? AND category ILIKE ?", nameQuery, categoryQuery).Find(&foods).Error; err != nil {
		return nil, err
	}

	return foods, nil
}

func GetFoodByRestaurantAndCategory(restaurantID uint32, category string) ([]Food, error) {
	var foods []Food

	categoryQuery := fmt.Sprintf("%%%s%%", category)

	if err := DB.Where("restaurant_id = ? AND category ILIKE ?", restaurantID, categoryQuery).Find(&foods).Error; err != nil {
		return nil, err
	}

	return foods, nil
}

func GetFoodByID(id uint32) (*Food, error) {
	var food Food

	if err := DB.First(&food, id).Error; err != nil {
		return nil, err
	}

	return &food, nil
}

func CreateFood(foodData FoodData, restaurantID uint32) (*Food, error) {
	err := defaultValidate.Struct(foodData)

	if err != nil {
		return nil, err
	}

	food, err := NewFood(foodData, restaurantID)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&food).Error; err != nil {
		return nil, err
	}

	return food, nil
}

func DeleteFood(foodID uint32) error {
	if err := DB.Delete(&Food{ID: foodID}).Error; err != nil {
		return err
	}

	return nil
}

func UpdateFood(food Food) error {
	if err := DB.Save(food).Error; err != nil {
		return err
	}

	return nil
}
