-- Arquivo de definição do esquema do banco
-- Automaticamente gerado através do dbdiagram.io (código em docs/diagrama.dbml)

CREATE TABLE "foods" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "category" varchar,
  "price" float,
  "restaurant_id" integer
);

CREATE TABLE "restaurants" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "description" varchar,
  "rating" float,
  "cnpj" varchar,
  "phone" varchar,
  "location" varchar,
  "user_id" integer,
  "category" varchar
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "email" varchar UNIQUE,
  "password" varchar,
  "phone" varchar,
  "role" integer,
  "location" varchar
);

CREATE TABLE "locations" (
  "id" serial PRIMARY KEY,
  "number" integer,
  "street" varchar,
  "neighborhood" varchar,
  "complement" varchar
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "created_at" timestamp,
  "rating" float,
  "user_id" integer,
  "restaurant_id" integer,
  "location" varchar
);

CREATE TABLE "order_items" (
  "quantity" integer,
  "food_id" integer,
  "order_id" integer,
  PRIMARY KEY ("food_id", "order_id")
);

CREATE TABLE "auth_tokens" (
  "token" varchar PRIMARY KEY,
  "user_id" integer,
  "created_at" timestamp 
);

ALTER TABLE "foods" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "restaurants" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("food_id") REFERENCES "foods" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "auth_tokens" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

