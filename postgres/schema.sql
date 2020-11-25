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
  "location_id" integer,
  "user_id" integer
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "password" varchar,
  "role" integer,
  "location_id" integer
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
  "location_id" integer
);

CREATE TABLE "order_items" (
  "quantity" integer,
  "food_id" integer,
  "order_id" integer,
  PRIMARY KEY ("food_id", "order_id")
);

ALTER TABLE "foods" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "restaurants" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id");

ALTER TABLE "restaurants" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("location_id") REFERENCES "locations" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("food_id") REFERENCES "foods" ("id");

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

