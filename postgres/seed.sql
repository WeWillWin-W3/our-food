-- Arquivo de inserção dos valores iniciais do banco
  
INSERT INTO
    locations (id, number, street, neighborhood, complement)
VALUES
    (1, 22, 'Rua Altair Brabíssimo', 'Jardim Jardinoso', 'Casa dos fundos'),
    (2, 23, 'Rua Altair Brabíssimo', 'Jardim Jardinoso', '');

INSERT INTO
    users (id, name, email, password, role, location_id)
VALUES
    (1, 'Mata-onça', 'eu@mataonca.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 1, 1),
    (2, 'Joãozinho', 'joaozinho007@hotmail.com', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 0, 2);

INSERT INTO 
    restaurants (id, name, description, rating, cnpj, phone, location_id, user_id)
VALUES
    (1, 'Pizzaria do Mata-onça', 'A pizzaria mais criminosa de CG', 5.0, '99.999.999/9999-99', '+55 67 9 9999-9999', 1, 1);

INSERT INTO 
    foods (id, name, description, category, price, restaurant_id)
VALUES
    (1, 'Pizza Calabresa', '', 'Pizza', 55.0, 1),
    (2, 'Pizza Marguerita', '', 'Pizza', 55.0, 1),
    (3, 'Pizza Portuguesa', '', 'Pizza', 55.0, 1),
    (4, 'Pizza Pantaneira', '', 'Pizza', 55.0, 1),
    (5, 'Pizza 4 Queijos', '', 'Pizza', 55.0, 1);