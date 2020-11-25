package model

type FoodData struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Category    string  `json:"category"`
	Price       float64 `json:"price"`
}

type Food struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	FoodData
	RestaurantID uint32
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

func CreateFood(foodData FoodData, restaurantID uint32) (*Food, error) {
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
