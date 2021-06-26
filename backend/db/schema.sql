DROP DATABASE trading_website;

CREATE DATABASE trading_website;

USE trading_website;

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  role VARCHAR(255) UNIQUE NOT NULL,
  
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
  full_name VARCHAR(255),
  age INT,
  gender VARCHAR(255),
  nationality VARCHAR(255),
  phone_number VARCHAR(255),
  current_location VARCHAR(255),
  role_id INT ,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
);

CREATE TABLE main_categories (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  main_category VARCHAR(255),

  PRIMARY KEY (id)
);

CREATE TABLE motors (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  sub_category VARCHAR(255),
  main_category_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE accessories (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  sub_category VARCHAR(255),
  main_category_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE pets (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  sub_category VARCHAR(255),
  main_category_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE electronics (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  sub_category VARCHAR(255),
  main_category_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE furniture (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  sub_category VARCHAR(255),
  main_category_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (main_category_id) REFERENCES main_categories(id)
);

CREATE TABLE cars (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  model VARCHAR(255),
  year VARCHAR(255),
  motor_capacity VARCHAR(255),
  kilometer VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  motors_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP ,

  PRIMARY KEY (id),
  FOREIGN KEY (motors_id) REFERENCES motors(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE motorbikes (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  model VARCHAR(255),
  year VARCHAR(255),
  motor_capacity VARCHAR(255),
  kilometer VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  motors_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP ,

  PRIMARY KEY (id),
  FOREIGN KEY (motors_id) REFERENCES motors(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE laptops (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  hard_drive VARCHAR(255),
  processor VARCHAR(255),
  memory VARCHAR(255),
  cond VARCHAR(255),
  graphics VARCHAR(255),
  location VARCHAR(255),
  electronics_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (electronics_id) REFERENCES electronics(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE mobile_phones (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  model VARCHAR(255),
  color VARCHAR(255),
  memory VARCHAR(255),
  cond VARCHAR(255),
  location VARCHAR(255),
  electronics_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (electronics_id) REFERENCES electronics(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE televisions (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  type VARCHAR(255),
  resolution VARCHAR(255),
  cond VARCHAR(255),
  location VARCHAR(255),
  electronics_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (electronics_id) REFERENCES electronics(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE sun_glasses (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  size VARCHAR(255),
  frame VARCHAR(255),
  cond VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  accessories_id INT, 
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (accessories_id) REFERENCES accessories(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE watches (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  brand VARCHAR(255),
  size VARCHAR(255),
  material VARCHAR(255),
  cond VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  accessories_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (accessories_id) REFERENCES accessories(id),
  FOREIGN KEY (user_id) REFERENCES users(id)

);

CREATE TABLE cats (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  origin VARCHAR(255),
  age VARCHAR(255),
  adoption VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  pets_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (pets_id) REFERENCES pets(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE dogs (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  origin VARCHAR(255),
  age VARCHAR(255),
  adoption VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  pets_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (pets_id) REFERENCES pets(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE birds (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  species VARCHAR(255),
  age VARCHAR(255),
  adoption VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  pets_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (pets_id) REFERENCES pets(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE wardrobes (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  size VARCHAR(255),
  cond VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  furniture_id INT, 
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (furniture_id) REFERENCES furniture(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE beds (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  title VARCHAR(255),
  description VARCHAR(4000),
  image VARCHAR(255),
  price INT,
  phone_number VARCHAR(255),
  size VARCHAR(255),
  cond VARCHAR(255),
  material VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  furniture_id INT,
  user_id INT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  FOREIGN KEY (furniture_id) REFERENCES furniture(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE permission (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
  permission VARCHAR(255),
  
  PRIMARY KEY (id)
);

CREATE TABLE role_permission (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,
   role_id INT,
  permission_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (permission_id) REFERENCES permission(id)
);
