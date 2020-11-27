# Fast Food App

Aplicativos de restaurante permitem que usuários façam pedidos de alimentos facilmente.
Tais aplicativos tipicamente oferecem opções pratos prontos e opções customizadas.

## Histórias de Usuário

- [ ] **Usuários podem navegar por diferentes opções comidas**

  > O usuário entra na página `/restaurants` e vê as categorias e as principais comidas.

  Nós não colocamos imagens nas comidas na definição do nosso model. Caso alguém queira colocar:

  - Adicionar o campo `image_url` no esquema do banco ([/api/postgres/schema.sql](/api/postgres/schema.sql)) e incluir esse campo nos dados do [/api/postgres/seed.sql](/api/postgres/seed.sql)

  - Adicionar o atributo `ImageURL` no model [/api/src/model/food.go](/api/src/model/food.go), colocando a tag `\`json:"image_url"\`` para ele ser retornado e lido no json.

  - Se tudo estiver certo, a API já estará retornando o `image_url` nas comidas

  Depois disso, a gente precisa conseguir listar as categorias. Tem duas formas de fazer isso aqui:

  #### Fazendo pelo front (mais simples):

  - Usar a função que criamos no API.js pra consultar todas as comidas e fazer um reduce nos resultados pra pegar só as categorias

  ```js
  // Cria um map onde as chaves são as categorias (evita repetição)
  const categoriesMap = foods.reduce(
    (categoriesMap, food) => ({
      ...categoriesMap,
      [food.category]: true,
    }),
    {}
  );

  // Pega as chaves do map
  const categories = Object.keys(categoriesMap);
  ```

  - Utilizar essa função no APIProvider, implementando a lógica pra salvar as categorias no state

  - Utilizar o useAPI() pra pegar o state do APIProvider no pages/Restaurants pra exibir as categorias
    Ver exemplo em [/web/src/pages/SignUp/index.js](/web/src/pages/SignUp/index.js)

  #### Fazendo pelo back (caso alguém queira aproveitar pra dar uma mexida por lá):

  - Implementar uma rota no router para retornar as categorias

    ```go
    // /api/router.go
    // ...
    foods.Get("/categories", controller.GetFoodCategories)
    ```

  - Implementar o controller

    ```go
    // /api/controller/food.go
    // ...

    func GetFoodCategories(c *fiber.Ctx) error {
        categories, err := model.GetFoodCategories()

        if err != nil {
            return fiber.NewError(fiber.StatusInternalServerError, err.Error())
        }

        return c.JSON(categories)
    }
    ```

  - Implementar o model

    ```go
    // /api/model/food.go
    // ...

    func GetFoodCategories() ([]string, error) {
        var categories []string

        if err := DB.Model(&Food{}).Pluck("category", &categories).Error; err != nil {
            return nil, err
        }

        return categories, nil
    }
    ```

  - Implementar a função no front (providers/APIProvider/API.js) pra consumir a rota
  - Criar a função no APIProvider pra utilizar a função pra consumir a rota e guardar o resultado no state
  - Utilizar o useAPI() pra pegar o state do APIProvider no pages/Restaurants pra exibir as categorias
    Ver exemplo em [/web/src/pages/SignUp/index.js](/web/src/pages/SignUp/index.js)

  Depois de pegar as categorias, acho interessante exibir uma parte para "Principais comidas". As comidas podem ser obtidas através do APIProvider e das funções que já criamos.

- [ ] **Usuários podem vizualizar estabelecimentos**

  > O usuário entra na página `/restaurants` e vê os principais restaurantes.

  Ver o exemplo em [/web/src/pages/SignUp/index.js](/web/src/pages/SignUp/index.js) para criar a lógica. O esquema é o mesmo:

  - Criar função no API.js que pega os restaurantes
  - Criar a função no APIProvider pra utilizar a função e guardar o resultado no state
  - Utilizar o useAPI() pra pegar o state do APIProvider no pages/Restaurants pra exibir os restaurantes

  Acho que por simplicidade, podemos deixar de lado alguns detalhes do gerenciamento desse state (quando ele deve ser atualizado, persistir os dados no localStorage ou no cache, etc)

  O ideal é que o APIProvider seja quebrado em providers diferentes para dividir o código. Vai chegar uma hora que vai ficar bagunçado caso tudo fique no mesmo lugar.
  Pra fazer isso, basta criar outro provider usando o APIProvider como exemplo e colocar ele na árvore de componentes em [src/App.js](/web/src/App.js). (Ps.: Coloque dentro do provider apenas os componentes que realmente dependem dele para evitar que componentes que não dependem do estado dele sejam atualizados com muita frequência)

  Exemplo:

  ```js
  export const App = () => (
    <>
      <Router>
        <Switch>
          <AuthProvider>
            <Route exact path="/dashboard">
              <RestaurantDashboard />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signup/location">
              <Location />
            </Route>
            <Route exact path="/signup/storeinformation">
              <StoreInformation />
            </Route>

            <FoodsProvider>
              <Route exact path="/restaurants">
                <Restaurants />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/order">
                <OrderFood />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </FoodsProvider>
          </AuthProvider>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
  ```

- [ ] **Usuários podem vizualizar detalhes das comidas**

  > Usuário clica em uma das comidas em `/restaurants` e é levado para a página de detalhe da comida em `/order` (acredito que seja essa)

  Tem duas formas gerais de se passar os detalhes da comida entre as rotas.

  A mais simples é passando através do router:

  ```js
  // pages/Restaurants/index.js

  import { useHistory } from "react-router-dom";

  // ...

  const history = useHistory();

  const goToFoodOrder = (food) =>
    history.push({
      pathname: "/order",
      state: { food },
    });
  ```

  ```js
  // pages/OrderFood/index.js

  import { useLocation } from "react-router-dom";

  // ...

  const location = useLocation();

  const { food } = location.state;
  ```

  Ver [documentação do react-router-dom](https://reactrouter.com/web/api/Hooks/uselocation) para mais detalhes.

  A segunda forma é armazenando esse food no state do APIProvider. Mas não recomendo muito, acho que fica mais bagunçado.

- [ ] **Usuários podem realizar o pedido de comidas**

  > O usuário clica em "Adicionar" página `/order` e adiciona uma comida ao sua sacola. Depois de adicionar todas as comidas à sua sacola, ele finaliza o pedido em `/checkout`.

  Esse é um pouco mais simples. Basta criar uma função no APIProvider pra guardar uma comida na sacola. Algo tipo:

  ```js
  // ...
  const APIProvider = (props) => {
    const [state, setState] = useState({
      user: undefined,
      authToken: undefined,
      error: undefined,
      loading: false,
      foodCart: [],
    });

    // ...

    const addFoodToCart = (food) =>
      updateState({ foodCart: [...state.foodCart, food] });
    const removeFoodFromCart = (foodId) =>
      updateState({
        foodCart: state.foodCart.filter((food) => food.id !== foodId),
      });

    // ...

    return (
      <APIProviderContext.Provider
        value={{
          ...state,
          createUser,
          logout,
          addFoodToCart,
          removeFoodFromCart,
        }}
        {...props}
      />
    );
  };
  ```

- [ ] **Usuários podem buscar por comidas e estabelecimentos**

  > Usuário utiliza o campo da página `/home` para buscar por restaurantes ou o campo "Busque sua comida" em `/restaurants` para buscar por comidas

  Mesmo esquema das histórias anteriores. Função pra consumir API, provider (ou talvez nessa caso fazer direto, já que não vai mudar o estado) e componente final. A API já suporta pesquisa por restaurantes em `/v1/restaurants?name=Pizzaria` e por comidas em `/v1/foods?name=Pizza%20de%20Rucula`

- [ ] **Usuários e estabelecimentos podem se cadastrar na plataforma**

  Já tem algumas coisas prontas quanto ao cadastro do usuário. Dá pra se basear nisso pra fazer o cadastro dos restaurantes e a autentificação dos usuários.

- [ ] **Estabelecimentos podem cadastrar comidas**

  Aqui o negócio complica, porque nós não temos uma página pra isso. O ideal seria criar uma página pra criar/editar/remover comidas quando o usuário atual fosse de um restaurante. O controle disso deve ser feito através do provider e do router através de rotas protegidas ([Protected routes and authentication with React Router v4](https://ui.dev/react-router-v4-protected-routes-authentication/), [Creating Protected routes in React JS](<https://medium.com/@subalerts/creating-protected-routes-in-react-js-89e95974a822#:~:text=In%20this%20story%20we%20would,be%20able%20to%20access%20it.&text=There%20are%203%20important%20steps%20to%20use%20react%2Drouter.&text=const%20Auth%20%3D%20%7BisAuthenticated%3A%20false%2Cauthenticate()%20%7Bthis.>)). No [App.js](), a utilização dessas rotas privadas pode ser feita da seguinte maneira:

  ```js
  // src/App.js
  import { Redirect } from "react-router-dom";

  const PrivateRoute = ({
    component: Component,
    redirectTo = "/signin",
    redirectIf = true,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) =>
        redirectIf ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );

  // ...

  export const App = () => (
    <>
      <Router>
        <Switch>
          <APIProvider>
            // ...
            <APIProvider.Consumer>
              {(API) => (
                <PrivateRoute
                  component={RestaurantEditFoods}
                  redirectTo="/"
                  redirectIf={!API.user || API.user.role !== RESTAURANT_ROLE}
                />
              )}
            </APIProvider.Consumer>
          </APIProvider>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
  ```

- [ ] **Estabelecimentos podem editar e remover comidas**

  Ver detalhes na história anterior

## Histórias Bônus

Aqui é só se alguém tiver muito empolgado mesmo

- [ ] Usuários podem aplicar filtros na busca de alimentos
- [ ] Usuários podem avaliar comidas e estabelecimentos
- [ ] Usuários podem ver o histórico de pedidos
- [ ] Usuários podem ver o histórico de avaliações
- [ ] Estabelecimentos podem definir promoções/descontos
- [ ] Estabelecimentos podem gerenciar vendas

## Plataformas para inspiração

- [iFood](https://www.ifood.com.br)
- [User Eats](https://www.ubereats.com)

## Diagrama

![Diagrama](./diagrama.png)
