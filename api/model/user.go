package model

import (
	"golang.org/x/crypto/bcrypt"
)

type Role uint8

const (
	RestaurantRole Role = iota
	ClientRole
)

type User struct {
	ID       uint32 `json:"id" gorm:"primaryKey"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password []byte `json:"password"`
	Role     `json:"role"`
}

func NewUser(id uint32, name, email, password string, role Role) (*User, error) {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(password), 2)

	if err != nil {
		return nil, err
	}

	user := &User{id, name, email, passwordHash, role}

	return user, nil
}

func (u *User) ComparePassword(password string) bool {
	err := bcrypt.CompareHashAndPassword(u.Password, []byte(password))

	if err != nil {
		return false
	}

	return true
}
