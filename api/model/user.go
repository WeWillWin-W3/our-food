package model

import (
	"golang.org/x/crypto/bcrypt"
)

type Role uint8

const (
	ClientRole Role = iota
	RestaurantRole
)

type User struct {
	ID       uint32 `json:"id" gorm:"primaryKey"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password []byte `json:"password"`
	Role     Role   `json:"role"`
}

func NewUser(id uint32, name, email, password string, role Role) (*User, error) {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), 2)

	if err != nil {
		return nil, err
	}

	user := &User{id, name, email, passwordHash, role}

	return user, nil
}

func CompareHashPassword(hash []byte, password string) bool {
	err := bcrypt.CompareHashAndPassword(hash, []byte(password))

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
