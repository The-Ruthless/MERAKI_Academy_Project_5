-- mysql -u root < "data.sql" -p
USE trading_website;

INSERT INTO roles (role) VALUES ('user');
INSERT INTO roles (role) VALUES ('admin');

INSERT INTO permissions (permission) VALUES ('CREATE');
INSERT INTO permissions (permission) VALUES ('READ');
INSERT INTO permissions (permission) VALUES ('UPDATE');
INSERT INTO permissions (permission) VALUES ('DELETE');

INSERT INTO roles_permissions (role_id,permission_id) VALUES (1,1);
INSERT INTO roles_permissions (role_id,permission_id) VALUES (1,2);
INSERT INTO roles_permissions (role_id,permission_id) VALUES (1,3);

INSERT INTO roles_permissions (role_id,permission_id) VALUES (2,1);
INSERT INTO roles_permissions (role_id,permission_id) VALUES (2,2);
INSERT INTO roles_permissions (role_id,permission_id) VALUES (2,3);
INSERT INTO roles_permissions (role_id,permission_id) VALUES (2,4);


INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  'obada@yahoo.com',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  "Obada",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "Zarqa" ,
  1
);

INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  'omar@yahoo.com',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  "Omar",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "Zarqa",
  1
);

INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  'hasan@yahoo.com',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  "Hasan",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "Germany",
  1
);

INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  'farid@yahoo.com',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  "Farid",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "Italy",
  1
);

INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  'ahmed@yahoo.com',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  "ahmed",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "russia",
  1
);

INSERT INTO users (
  email,
  password,
  full_name,
  age,
  gender,
  nationality,
  phone_number,
  current_location,
  role_id
) VALUES (
  '',
  '$2b$10$aF.pd55yjxc1Iok.ASohHOd3OC3xGY4EjbXgEBCSrg3kG1WJeE4jC',
  '',
  25,
  '',
  '',
  '',
  '' ,
  1
);



INSERT INTO main_categories (main_category) VALUES ('motors');
INSERT INTO main_categories (main_category) VALUES ('electronics');
INSERT INTO main_categories (main_category) VALUES ('accessories');
INSERT INTO main_categories (main_category) VALUES ('pets');
INSERT INTO main_categories (main_category) VALUES ('furniture');

INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('cars' , 1 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('motorbikes' , 1 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('laptops' , 2 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('mobile_phones' , 2 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('televisions' , 2 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('sun_glasses' , 3 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('watches' , 3 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('cats' , 4 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('dogs' , 4 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('birds' , 4 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('wardrobes' , 5 );
INSERT INTO sub_categories (sub_category , main_category_id) VALUES ('beds' , 5 );

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'bed 1 for sale very good',
  'very reasonable sized bed
  size XL
  cond used
  material Wood
  color red',
  '1',
  50,
  '+89 40606846',
  'Tafilah',
  12,
  1
);

INSERT INTO advertisements (
  title,  
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'bird coco for sale very good',
  'very good condition
  origin sea birds
  age 15 day
  adoption No
  color white',
  '1',
  255,
  '+89 406846',
  'Ajloun',
  10,
  2
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  
  location,
  sub_category_id,
  user_id
) VALUES (
  'mercedes for sale very good',
  'very good condition
  brand Mercedes
  model E255
  year 2015
  motor capacity 2000cc
  kilometer 150000km
  color Blue',
  '1',
  1666,
  '+89 406846',
  'Jarash',
  1,
  5
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'a very fast motorbike',
  'insanely fast motorbike that accelerates from 0 to 100 in 4 seconds
  brand Honda
  model Shine
  year 2012
  motor_capacity
  kilometer 50000km
  color Red',
  '1',
  1300,
  '+89 406846',
  'Zarqa',
  1,
  5
);

INSERT INTO advertisements (
  title,  
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'cat for sale very good',
  'very good condition
  origin seyami
  age 10 months
  adoption No
  color grey',
  '1',
  266,
  '+89 40676878846',
  'Ajloun',
  8,
  4
);

INSERT INTO advertisements (
  title,  
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'dog for sale very good',
  'very good condition
  origin Huskey
  age 3 years
  adoption No 
  color Brown',
  '1',
  5,
  '+89 408986846',
  'Zarqa',
  9,
  3
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'neat sunglases',
  'nice rayban sunglasses with stirdy frame and good durability
  brand Rayban
  size 58 mm
  frame metal
  cond new
  color black',
  '3',
  25,
  '+971 798207195',
  'Mafraq',
  6,
  3
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'nice watch for sale',
  'a very beautiful watch that is luxury
  brand Rolex
  size 48 mm
  material metal
  cond new
  color blue',
  '3',
  70,
  '+971 783697745',
  'Irbid',
  7,
  2
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'huge and useful wardrobe',
  'great space wardrobe and useful for everyday use
  size XL
  cond used
  color black',
  '3',
  110,
  '+971 775031145',
  'Irbid',
  11,
  5
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  
  location,
  sub_category_id,
  user_id
) VALUES (
  'HP laptop with high performance',
  'very good condition with hd screen
  brand HP
  hard_drive 2T
  processor core I7
  memory 16GB ram
  cond new
  graphics gtx 1050ti',
  '1',
  500,
  '+89 40606846',
  "Zarqa",
  3,
  1
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'crystal clear screen',
  'nice curved screen 
  brand LG
  screen LCD
  resolution Full-Hd
  cond used',
  '3',
  450,
  '+971 795031145',
  'Amman',
  5,
  4
);

INSERT INTO advertisements (
  title,
  description,
  image,
  price,
  phone_number,
  location,
  sub_category_id,
  user_id
) VALUES (
  'powerful phone',
  'good condition phone with high specs
  brand samsung
  model note5
  color white
  memory 6gb
  cond used ',
  '3',
  320,
  '+971 795639145',
  'Zarqa',
  4,
  2
);

INSERT INTO favorites(user_id,adv_id)values(1,2);
INSERT INTO favorites(user_id,adv_id)values(1,3);
INSERT INTO favorites(user_id,adv_id)values(2,2);
INSERT INTO favorites(user_id,adv_id)values(2,1);
INSERT INTO favorites(user_id,adv_id)values(2,4);
INSERT INTO favorites(user_id,adv_id)values(2,3);