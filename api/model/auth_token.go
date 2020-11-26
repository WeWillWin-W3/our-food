package model

import (
	"time"

	"github.com/google/uuid"
)

type AuthToken struct {
	Token     string    `json:"token" gorm:"primaryKey"`
	UserID    uint32    `json:"user_id"`
	CreatedAt time.Time `json:"created_at"`
}

func NewAuthToken(userID uint32) (*AuthToken, error) {
	uuid, err := uuid.NewRandom()

	if err != nil {
		return nil, err
	}

	return &AuthToken{uuid.String(), userID, time.Now()}, nil
}

func CreateAuthToken(userID uint32) (*AuthToken, error) {
	var user User

	if err := DB.First(&user, userID).Error; err != nil {
		return nil, err
	}

	authToken, err := NewAuthToken(userID)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&authToken).Error; err != nil {
		return nil, err
	}

	return authToken, nil
}

func GetAllAuthTokens() ([]AuthToken, error) {
	var authTokens []AuthToken

	if err := DB.Find(&authTokens).Error; err != nil {
		return nil, err
	}

	return authTokens, nil
}

func GetAuthTokenByToken(token string) (*AuthToken, error) {
	var authToken AuthToken

	if err := DB.Where("token = ?", token).First(&authToken).Error; err != nil {
		return nil, err
	}

	return &authToken, nil
}
