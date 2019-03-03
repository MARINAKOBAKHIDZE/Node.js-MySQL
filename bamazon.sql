DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
item_id INT NOT NULL auto_increment,
product_name VARCHAR(30),
department_name VARCHAR(30),
price DECIMAL(10,3),
stock_quantity INT NULL,
primary key (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("milk","dairy",3.5, 75),
("butter", "dairy", 2.0, 30),
("ice_cream", "frozen", 4.3, 40),
("chocolate", "candy", 1.5, 100),
("beef", "frozen", 4.5, 20),
("chicken", "frozen", 3.5, 40),
("fish", "frozen", 3.1, 25);
select * from products;