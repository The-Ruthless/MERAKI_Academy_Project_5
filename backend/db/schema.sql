



DROP DATABASE trading_website;

CREATE DATABASE trading_website;

USE trading_website;

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,

  role VARCHAR(255),
  
  PRIMARY KEY (id)
  
);


CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,

  email VARCHAR(255),
  password VARCHAR(255),
  full_name VARCHAR(255),
  age INT,
  gender VARCHAR(255),
  nationality VARCHAR(255),
  phone_number VARCHAR(255),
  current_location VARCHAR(255),

  role_id INT,

  PRIMARY KEY (id),

  FOREIGN KEY (role_id) REFERENCES role(id)
);

CREATE TABLE main_categories (
  id INT AUTO_INCREMENT NOT NULL,
  is_deleted TINYINT DEFAULT 0,

  main_category VARCHAR(255),

  PRIMARY KEY (id)
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
  catergory_id INT,
  user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)



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

  catergory_id INT,
   user_id INT,



  PRIMARY KEY (id),

  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)

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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
   catergory_id INT,
    user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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
  type VARCHAR(255),
  color VARCHAR(255),
  location VARCHAR(255),
  catergory_id INT,
   user_id INT,

  PRIMARY KEY (id),
  FOREIGN KEY (catergory_id) REFERENCES main_categories(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
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

  PRIMARY KEY (id),
  role_id INT,
  permission_id INT,


  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (permission_id) REFERENCES permission(id)
  
  
);


