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
	ID *uint32 `json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`
	Password []byte `json:"password"`
	Role `json:"role"`
}

type PlainUser struct {
	Name string
	Email string
	Password string
}

func NewUser(plainUser PlainUser, role Role) (*User, error) {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(plainUser.Password), 2)

	if err != nil {
		return nil, err
	}

	user := &User{nil, plainUser.Name, plainUser.Email, passwordHash, role}

	return user, nil
}

func (u *User) ComparePassword(password string) bool {
	err := bcrypt.CompareHashAndPassword(u.Password, []byte(password))

	if err != nil {
		return false
	}

	return true
}