package main

import (
	"fmt"
	"net/http"
)

type UsersHandler struct {
}

func (uh *UsersHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var head string
	head, r.URL.Path = ShiftPath(r.URL.Path)

	match := Matcher(head, r.Method)

	switch {
	case match("", "GET"):
		fmt.Fprint(w, `{"message":"Hello from users!"}`)
	default:
		DefaultHTTPError(w)
	}
}
