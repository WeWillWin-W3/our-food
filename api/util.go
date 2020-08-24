package main

import (
	"fmt"
	"net/http"
	"path"
	"strings"
)

// ShiftPath splits off the first component of p, which will be cleaned of
// relative components before processing. head will never contain a slash and
// tail will always be a rooted path without trailing slash.
func ShiftPath(p string) (head, tail string) {
	p = path.Clean("/" + p)
	i := strings.Index(p[1:], "/") + 1
	if i <= 0 {
		return p[1:], "/"
	}
	return p[1:i], p[i:]
}

// Matcher returns a function that matches passed args if they are defined
func Matcher(match ...interface{}) func(...interface{}) bool {
	return func(values ...interface{}) bool {
		for i, value := range match {
			if v := values[i]; v != nil && v != value {
				return false
			}
		}
		return true
	}
}

// DefaultHTTPError returns http error message like "Cannot GET /"
func DefaultHTTPError(w http.ResponseWriter) {
	http.Error(w, fmt.Sprint(`{"message":"Not found"}`), http.StatusNotFound)
}
