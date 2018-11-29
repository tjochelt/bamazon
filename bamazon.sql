create database bamazon_db;

use bamazon_db;

create table products (
id integer(10) auto_increment primary key,
product_name varchar(255) not null,
department_name varchar(255) not null,
price decimal(10, 2) not null,
stock_quantity integer (10) not null
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bubble Gum", "Snacks", 3.50, 100),
("Computer", "Tech", 550.65, 15), 
("Keyboard", "Tech", 20.00, 15), 
("French Press", "Snacks", 35, 12),
("Tape", "Household", 3.50, 10),
("Yeti", "Snacks", 35.99, 25),
("Snow Boots", "Outdoor", 86.79, 10),
("Horse Mosaic", "Household", 999.99, 15),
("Corgi Poster", "Household", 321.43, 15);

-- INSERT INTO DEPARTMENT (NAME) VALUES ("Engineering");
-- INSERT INTO DEPARTMENT_EMPLOYEE (EMPLOYEE_ID, DEPARTMENT_ID)
-- VALUES (1, 1);

