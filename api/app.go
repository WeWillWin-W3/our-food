package main

import (
	"fmt"
	"net/http"
)

func main() {
	a := &App{&UsersHandler{}}

	// No Go não existe throw. Erros são retornados como parte do retorno de
	// uma função. Se não houver erro, eles são nulos (nil)
	err := http.ListenAndServe(":3000", a)

	if err != nil {
		panic(err)
	}
}

// App é uma struct que implementa a interface http.Handler, que define um handler
// de requisições http. Usando o Express como analogia, ele seria como o Router.
type App struct {
	// Conexão com o DB e outras dependências globais do app podem ser definidas aqui.
	// UsersHandler é o "sub router" da rota "/v1/users"
	*UsersHandler
}

// w é o res do Express, r é o req.
// Essa é a declaração de um "método" da "classe" App
func (a *App) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// A função ShiftPath é um helper (util.go) criado pra lidar com o fato
	// do Go não ter uma implementação de params nativa (algo como "/v1/users/:id").
	// A solução é pegar a primeira parte da rota (separar o /v1 do /users) e passar o
	// restante da rota para o subrouter responsável
	var head string
	head, r.URL.Path = ShiftPath(r.URL.Path)

	// Matcher é um helper para facilitar o uso do switch diferenciado do Go.
	// Basicamente, quando você tem um switch que não possui condição, ele executa
	// o primeiro case que der true, ignorando os outros.
	// A função match vai comparar os valores passados para ela com os valores
	// passados para o Matcher (head == "" && r.Method == "GET")
	match := Matcher(head, r.Method)

	switch {
	case match("", "GET"):
		fmt.Fprint(w, `{"message":"FastFoodAPI v1","status":"running"}`)
	case match("v1", "GET"):
		// Você pode instanciar variáveis direto na declaração do switch (mesma
		// coisa vale pro if e pro for)
		switch head, r.URL.Path = ShiftPath(r.URL.Path); head {
		case "users":
			// Delegando o restante do caminho para o sub router
			a.UsersHandler.ServeHTTP(w, r)
		}
	default:
		DefaultHTTPError(w)
	}
}
