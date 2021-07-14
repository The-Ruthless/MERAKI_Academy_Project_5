-- mysql -u root < "schema.sql" -p
DROP DATABASE trading_website;

CREATE DATABASE trading_website;

USE trading_website;

CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  role VARCHAR(255) UNIQUE NOT NULL,
  
  PRIMARY KEY (id)
);

CREATE TABLE permissions (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  permission VARCHAR(255),
  
  PRIMARY KEY (id)
);

CREATE TABLE roles_permissions (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  role_id INT,
  permission_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  age INT,
  gender VARCHAR(255),
  nationality VARCHAR(255),
  phone_number VARCHAR(255),
  current_location VARCHAR(255),
  role_id INT ,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles (id)
);

CREATE TABLE main_categories (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  main_category VARCHAR(255),

  PRIMARY KEY (id)
);

CREATE TABLE sub_categories(
id INT AUTO_INCREMENT NOT NULL,
is_deleted TINYINT DEFAULT 0,
sub_category VARCHAR(255),
main_category_id INT,

PRIMARY KEY (id),
FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE advertisements(
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP ,
  title VARCHAR(255),
  description TEXT(5000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  location VARCHAR(255),
  sub_category_id INT,
  user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (sub_category_id) REFERENCES sub_categories(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE favorites (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  user_id INT,
  adv_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (adv_id) REFERENCES advertisements(id)
);

CREATE TABLE images (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  image_url VARCHAR(1000),
  adv_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (adv_id) REFERENCES advertisements(id)
);
