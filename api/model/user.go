package model

import (
	"golang.org/x/crypto/bcrypt"
)

type Role uint8

const (
	ClientRole Role = iota
	RestaurantRole
)

type UserData struct {
	Name     string `json:"name" validate:"required"`
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required"`
	Role     Role   `json:"role" validate:"gte=0,lte=1"`
}

type User struct {
	ID uint32 `json:"id" gorm:"primaryKey"`
	UserData
}

func NewUser(userData UserData) (*User, error) {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(userData.Password), 2)

	if err != nil {
		return nil, err
	}

	userData.Password = string(passwordHash)

	user := &User{UserData: userData}

	return user, nil
}

func CompareHashPassword(hash string, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))

	if err != nil {
		return false
	}

	return true
}

func (u *User) ComparePassword(password string) bool {
	return CompareHashPassword(u.Password, password)
}

func GetAllUsers() ([]User, error) {
	var users []User

	if err := DB.Find(&users).Error; err != nil {
		return nil, err
	}

	return users, nil
}

func GetUserByID(id uint32) (*User, error) {
	var user User

	if err := DB.First(&user, id).Error; err != nil {
		return nil, err
	}

	return &user, nil
}

func CreateUser(userData UserData) (*User, error) {
	err := defaultValidate.Struct(userData)

	if err != nil {
		return nil, err
	}

	user, err := NewUser(userData)

	if err != nil {
		return nil, err
	}

	if err := DB.Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}
