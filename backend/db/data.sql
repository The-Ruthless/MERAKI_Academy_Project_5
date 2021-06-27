USE trading_website;

INSERT INTO role (role) VALUES ('user');
INSERT INTO role (role) VALUES ('admin');

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
  '12345',
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
  'Omar@yahoo.com',
  '12345',
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
    'Hasan@yahoo.com',
    '12345',
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
  'Farid@yahoo.com',
  '12345',
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
  '12345',
  "ahmed",
  25,
  'male',
  'Jordainian',
  '07895987648',
  "russia",
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
  size,
  cond,
  material,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
          'bed 1 for sale very good',
          'very good condition with a mattress',
  '1',
  50,
  '+89 40606846',
  'XL',
  'used',
  'Wood',
  'red',
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
  origin,
  age,
  adoption,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'bird coco for sale very good',
  'very good condition',
  '1',
  255,
  '+89 406846',
  'sea birds',
  15,
  'No',
  'white',
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
  brand,
  model,
  year,
  motor_capacity,
  kilometer,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'mercedes for sale very good',
  'very good condition',
  '1',
  1666,
  '+89 406846',
  'Mercedes',
  'E255',
  '2015',
  '2000cc',
  150000,
  'Blue',
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
  brand,
  model,
  year,
  motor_capacity,
  kilometer,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'a very fast motorbike',
  'insanely fast motorbike that accelerates from 0 to 100 in 4 seconds',
  '1',
  1300,
  '+89 406846',
  'Honda',
  'Shine',
  '2012',
  '250cc',
  50000,
  'Red',
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
  origin,
  age,
  adoption,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'cat for sale very good',
  'very good condition',
  '1',
  266,
  '+89 40676878846',
  'seyami',
  10,
  'No',
  'grey',
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
  origin,
  age,
  adoption,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'dog for sale very good',
  'very good condition',
  '1',
  5,
  '+89 408986846',
  'Haskey',
  3,
  'No',
  'Brown',
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
  brand,
  size,
  frame,
  cond,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'neat sunglases',
  'nice rayban sunglasses with stirdy frame and good durability',
  '3',
  25,
  '+971 798207195',
  'Rayban',
  '58 mm',
  'metal',
  'new',
  'black',
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
  brand,
  size,
  material,
  cond,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'nice watch for sale',
  'a very beautiful watch that is luxury',
  '3',
  70,
  '+971 783697745',
  'Rolex',
  '48 mm',
  'metal',
  'new',
  'blue',
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
  size,
  cond,
  color,
  location,
  sub_category_id,
  user_id
) VALUES (
  'huge and useful wardrobe',
  'great space wardrobe and useful for everyday use',
  '3',
  110,
  '+971 775031145',
  'XL',
  'used',
  'black',
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
  brand,
  hard_drive,
  processor,
  memory,
  cond,
  graphics,
  location,
  sub_category_id,
  user_id
) VALUES (
  'HP laptop with high performance',
  'very good condition with hd screen',
  '1',
  500,
  '+89 40606846',
  'HP',
  '2T',
  'core I7',
  '16GB ram',
  'good condtion',
  'Getforce',
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
  brand,
  screen,
  resolution,
  cond,
  location,
  sub_category_id,
  user_id
) VALUES (
  'crystal clear screen',
  'nice curved screen ',
  '3',
  450,
  '+971 795031145',
  'LG',
  'LCD',
  'Full-Hd',
  'used',
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
  brand,
  model,
  color,
  memory,
  cond,
  location,
  sub_category_id,
  user_id
) VALUES (
  'powerful phone',
  'good condition phone with high specs ',
  '3',
  320,
  '+971 795639145',
  'samsung',
  'note5',
  'white',
  '6gb',
  'used',
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