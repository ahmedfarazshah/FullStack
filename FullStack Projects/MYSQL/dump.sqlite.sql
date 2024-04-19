-- TABLE
CREATE TABLE customers(
  id int not NULL,
  username text, 
  address text,
  PRIMARY KEY (id));
  
CREATE TABLE order_linkednow(
  id int not NULL,
  order_id int,
  customer_id int,
  product_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN key (product_id) REFERENCES products(id)
);

CREATE TABLE "order_notlinked"(
  id int not NULL,
  order_id int,
  customer_id int,
  product_id int,
  PRIMARY KEY (id));
  
CREATE TABLE products(
  id int not NULL,
  name text,
  price numeric,
  stock numeric,
  PRIMARY KEY (id));
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
