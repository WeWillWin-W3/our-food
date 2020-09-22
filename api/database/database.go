package database

import (
	"database/sql"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectDB() error {
	connStr := "postgres://postgres:secret@localhost/ourfood?sslmode=disable"
	var err error

	if DB, err = sql.Open("postgres", connStr); err != nil {
		return err
	}

	if err = DB.Ping(); err != nil {
		return err
	}

	return nil
}