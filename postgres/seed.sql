-- Arquivo de inserção dos valores iniciais do banco

INSERT INTO
    users (name, email, password, role, location)
VALUES
    ('Mata-onça', 'eu@mataonca.com', '$2a$10$d35z8YdynNXcgAgs2ZC5OO7F1mL63dH63JAvQTmQLAWaYyyufolVS', 1, 'Rua Altair Brabíssimo, 22 - Jardim Jardinoso'),
    ('Joãozinho', 'joaozinho007@hotmail.com', '$2a$10$d35z8YdynNXcgAgs2ZC5OO7F1mL63dH63JAvQTmQLAWaYyyufolVS', 0, 'Rua Altair Brabíssimo, 23 - Jardim Jardinoso');

INSERT INTO 
    restaurants (name, description, category, rating, cnpj, phone, location, user_id)
VALUES
    ('Pizzaria do Mata-onça', 'A pizzaria mais criminosa de CG', 'Sushisharia', 5.0, '99.999.999/9999-99', '+55 67 9 9999-9999', 'Rua Altair Brabíssimo, 22 - Jardim Jardinoso', 1);

INSERT INTO 
    foods (name, description, category, price, restaurant_id)
VALUES
    ('Pizza Calabresa', 'Pizza de calabresa com requintes de caviar', 'Pizza', 55.0, 1),
    ('Pizza Marguerita', 'Pizza de marguerita com queijo mussarela refinada', 'Pizza', 55.0, 1),
    ('Pizza Portuguesa', 'Pizza do país de mesma lingua', 'Pizza', 55.0, 1),
    ('Pizza Pantaneira', 'Pizza originada em um famoso bioma do nosso estado', 'Pizza', 55.0, 1),
    ('Pizza 4 Queijos', 'Massa com muito queijo encima', 'Pizza', 55.0, 1);