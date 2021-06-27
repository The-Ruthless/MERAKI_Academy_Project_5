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



INSERT INTO motors (sub_category , main_category_id) VALUES ('cars' , 1 );
INSERT INTO motors (sub_category , main_category_id) VALUES ('motorbikes' , 1 );

INSERT INTO electronics (sub_category , main_category_id) VALUES ('laptops' , 2 );
INSERT INTO electronics (sub_category , main_category_id) VALUES ('mobile_phones' , 2 );
INSERT INTO electronics (sub_category , main_category_id) VALUES ('televisions' , 2 );


INSERT INTO accessories (sub_category , main_category_id) VALUES ('sun_glasses' , 3 );
INSERT INTO accessories (sub_category , main_category_id) VALUES ('watches' , 3 );


INSERT INTO pets (sub_category , main_category_id) VALUES ('cats' , 4 );
INSERT INTO pets (sub_category , main_category_id) VALUES ('dogs' , 4 );
INSERT INTO pets (sub_category , main_category_id) VALUES ('birds' , 4 );


INSERT INTO furniture (sub_category , main_category_id) VALUES ('wardrobes' , 5 );
INSERT INTO furniture (sub_category , main_category_id) VALUES ('beds' , 5 );





INSERT INTO beds (
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
  furniture_id,
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
  '16th street abo oshebah alley',
  2,
  1
);




INSERT INTO birds (
  title,  
  description,
  image,
  price,
  phone_number,
  species,
  age,
  adoption,
  color,
  location,
  pets_id,
  user_id
) VALUES (
 'bird coco for sale very good',
 'very good condition',
  '1',
  255,
  '+89 406846',
  'sea birds',
  '15 days',
  'No',
  'white',
  '16th street abo oshebah alley',
  3,
  2
);


INSERT INTO cars (
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
  motors_id,
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
  '150000km',
  'Blue',
  '17th street abo oshebah alley',
  1,
  3
);


INSERT INTO cats (
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
  pets_id,
  user_id
) VALUES (
 'pussy cat for sale very good',
 'very good condition',
  '1',
  266,
  '+89 40676878846',
  'seyami',
  '15 months',
  'No',
  'grey',
  '18th street abo oshebah alley',
  1,
  4
);


INSERT INTO dogs (
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
  pets_id,
  user_id
) VALUES (
 'dog momo for sale very good',
 'very good condition',
  '1',
  5,
  '+89 408986846',
  'Haskey',
  '3 years',
  'No',
  'Brown',
  '20th street abo oshebah alley',
  2,
  3
);


INSERT INTO sun_glasses (
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
  accessories_id,
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
  '36th street near alqadi',
  1,
  3
);

INSERT INTO watches (
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
  accessories_id,
  user_id
) VALUES (
 'neat sunglases',
 'nice rayban sunglasses with stirdy frame and good durability',
  '3',
  70,
  '+971 783697745',
  'Rayban',
  '58 mm',
  'metal',
  'new',
  'green tint',
  '26th batrawi roundabout',
  2,
  2
);

INSERT INTO wardrobes (
  title,
  description,
  image,
  price,
  phone_number,
  size,
  cond,
  color,
  location,
  furniture_id,
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
  '26th batrawi roundabout',
  2,
  5
);





INSERT INTO laptops (
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
  electronics_id,
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
  1,
  1
);


INSERT INTO televisions (
  title,
  description,
  image,
  price,
  phone_number,
  brand,
  type,
  resolution,
  cond,
  location,
  electronics_id,
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
  '26th batrawi roundabout',
  3,
  4
);


INSERT INTO mobile_phones (
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
  electronics_id,
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
  'mecca street',
  2,
  2
);















