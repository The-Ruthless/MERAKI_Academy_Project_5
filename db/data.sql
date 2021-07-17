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
  'Toyota Camry 2016 GCC',
  'Toyota Camry 2016 GCC MidOption SE
  Excellent Condition
  Monthly : 950*
  Color: Black
  GCC SPECS
  Cash Price: 25000 JD
  Mileage: 63,000
  Button Start Keyless Entry
  Cruise Control MultiMedia Control
  Navigation
  Bluet',
  'https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InJ0YTQ5dmJnZzZ0Mi1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjUwLCJwIjoiY2VudGVyLGNlbnRlciIsImEiOjgwfV19.gBi1OdOxweMh11mA9d-QIGA27gdhDdwipoi2o5MqfjQ/image;p=main;q=70;s=828x620',
  25000,
  '+9627891XXXX',
  'Tafilah',
  1,
  1
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InJ0YTQ5dmJnZzZ0Mi1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjUwLCJwIjoiY2VudGVyLGNlbnRlciIsImEiOjgwfV19.gBi1OdOxweMh11mA9d-QIGA27gdhDdwipoi2o5MqfjQ/image;p=main;q=70;s=828x620',
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
  'MITSUBISHI LANCER 2016 GCC FULLOPTION',
  'MITSUBISHI LANCER 2016 FULLOPTION
  AGENCY MAINTAIN
  SERVICE CONTRACT available till 100,000km
  Color: Silver
  GCC SPECS
  Cash Price: 17000 JD
  KM : 57,000 "Agency Maintain"
  Sunroof
  Back Camera
  Parking Scensors
  Mult',
  'https://www.autozel.com/images/Cars/330164.jpg',
  17000,
  '+9627948XXXX',
  'Zarqa',
  1,
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
  'Yamaha R6 2014 GCC',
  'Yamaha R6 - 600cc 2014 - Dubai Registration GCC specs.
  Second Owner, No Accident.
  32,500 Kilometers',
  'https://opensooq-images.os-cdn.com/previews/700x0/2a/f7/2af78f3a8cbecae4482b65db87060b284389c23f826a393dd5cdbb6ce792cd44.jpg.jpg',
  9000,
  '+9627844XXXX',
  'Ajloun',
  2,
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
  'Kawasaki Ninja ZX6R 2013',
  'Kawasaki Ninja FZX6R 2013
  Bikes is In Good Condition
  Used Once Or Twice A Week Since Purchased
  Want To Sale ASAP.',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/2013_Kawasaki_ZX-6R.jpg',
  11000,
  '+9627811XXXX',
  'Amman',
  2,
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
  'HP 15S-EQ0014NE – Ryzen 7',
  'BRAND NEW --- FIXED PRICE: 600 JD
  NEVER USED
  ONE YER WARRANTY
  Brand --- HP
  Package Dimensions --- 58.4 x 32.8 x 6.8 cm; 2.43 kg
  Processor Brand --- ‎AMD Ryzen 7 3700U with Radeon Vega Mobile Gfx
  RAM Size --- 8 GB
  Speed --- 2.3 Ghz
  Power Source --- Battery Powered
  Operating System ‎Windows 10 Home
  Storage --- 512GB
  Battery Life --- up to 8.5hrs
  USB --- 1 x USB 3.1 Gen 1 Type-C™ (Data Transfer Only, 5 Gb/s signaling rate), 2 x USB 3.1 Gen 1 Type-A (Data Transfer Only)',
  'https://citycenter.jo/image/cache/catalog/22021/250g7-550x400.jpg',
  600,
  '+96278494XXXX',
  'Jarash',
  3,
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
  'lenovo ideapad 3 for sale!',
  'Less than a year old. 15.6 inch. good quality and charges quickly!
  Lenovo Ideapad 3, Intel Core i5-10210U, 15.6" FHD, 8 GB RAM, 1TB HDD 128GB SSD, Nvidia MX330 2GB, Eng-Arb, Windows 10 Home',
  'https://www.lenovo.com/medias/lenovo-ideapad-3-15-almond-intel-hero.png?context=bWFzdGVyfHJvb3R8Mjc2NTE3fGltYWdlL3BuZ3xoMWUvaDU1LzEwODU5MzUxNDc0MjA2LnBuZ3wwMWIzNGFhY2M1MTljZTNiMzAwYmE3NGFjOWFiNjU2MWIxYzI4Y2I1YmJhOTM1NDVkNmZjNjVlZWYyZGEyNmIx',
  800,
  '+96278497XXXX',
  'Amman',
  3,
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
  'Huawei p30 pro 128 gb single sim',
  'Original huawei p30 pro
  Single sim
  With accessories',
  'https://mobizil.com/wp-content/uploads/2019/03/Huawei-P30-Pro-Black.jpg',
  320,
  '+9627757XXXX',
  'Zarqa',
  4,
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
  'New iPhone 12 Pro Max 256GB',
  '<Case and Screen Guard as freebie with the phone>
  [Never opened never used with one year apple warranty verify my product at apple store before purchasing]',
  'https://mobizil.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Max.jpg',
  999,
  '+962795XXXX',
  'Amman',
  4,
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
  'samsung TV',
  'Samsung 55RU7100 smart tv for sale
  YouTube Netflix
  Excellent working condition
  Statd with original remote
  Price is final
  Pleas contect',
  'https://laz-img-sg.alicdn.com/p/dd5293fc85c4f50f752689cbab199a73.png_720x720q80.jpg_.webp',
  250,
  '+962 78003XXXX',
  'Amman',
  5,
  3
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://laz-img-sg.alicdn.com/p/dd5293fc85c4f50f752689cbab199a73.png_720x720q80.jpg_.webp',
  9
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
  'SAMSUNG 65Q800T QLED 8K FOR SALE',
  'SAMSUNG 65 inch QLED 8k
  For sale barnd new only opan box
  Call me free delivery',
  'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1311817880',
  1000,
  '+962 78119XXXX',
  'Karak',
  5,
  5
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1311817880',
  10
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
  'Chole lady brand new sunglass',
  'good condition glasses almost new and perfect color with polarized effect',
  'https://dtpmhvbsmffsz.cloudfront.net/posts/2016/12/28/586479ef7fab3afab1028094/m_586479f07fab3afab1028096.jpg',
  65,
  '+962 798123XXXX',
  'Amman',
  6,
  5
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://dtpmhvbsmffsz.cloudfront.net/posts/2016/12/28/586479ef7fab3afab1028094/m_586479f07fab3afab1028096.jpg',
  11
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
  'ray-ban sunglasses rb3529 free delivery',
  '100% authentic guarantee
  free dubai delivery
  second hand
  same as new
  original price 700',
  'https://i.ytimg.com/vi/zwOLIDmxw4w/maxresdefault.jpg',
  95,
  '+962 798123XXXX',
  'Zarqa',
  6,
  4
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://i.ytimg.com/vi/zwOLIDmxw4w/maxresdefault.jpg',
  12
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
  'Rare Armani Exchange Chronograph Watch',
  'Selling from my collection
  Rare Armani Exchange Chronograph Square Dial Quartz Movement Size 40mm perfect Working Condition',
  'https://media.karousell.com/media/photos/products/2019/01/02/bn_emporio_armani_watch_mother_of_pearl_rose_gold_1546436622_d50d6722_progressive.jpg',
  90,
  '+962 78378XXXX',
  'Irbid',
  7,
  3
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://media.karousell.com/media/photos/products/2019/01/02/bn_emporio_armani_watch_mother_of_pearl_rose_gold_1546436622_d50d6722_progressive.jpg',
  13
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
  'Smart watch',
  'Fitness tracker Zentality.

  Brand new, unopened, unpacked.

  All accessories together for 40 Jd.

  Everything is new.',
  'https://image.made-in-china.com/2f0j00GSiYlVyFAUbe/Lenovo-Smartwatch-9-Factory-Sale-Various-Widely-Used-Sport-Smart-Watch-for-Men.jpg',
  40,
  '+962 72178XXXX',
  'Irbid',
  7,
  5
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://image.made-in-china.com/2f0j00GSiYlVyFAUbe/Lenovo-Smartwatch-9-Factory-Sale-Various-Widely-Used-Sport-Smart-Watch-for-Men.jpg',
  14
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
  'PERSIAN FEMALE CAT',
  'Persian Female CAT

  SILVER AND WHITE COLOR

  CUTE AND ACTIVE

  FRIENDLY CAT

  WITH ALL VACCINATION RECORDS',
  'https://i.pinimg.com/originals/e9/e1/38/e9e13855c2bda28c77c5de63d881661e.jpg',
  300,
  '+962 777768XXXX',
  'Aqaba',
  8,
  1
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://i.pinimg.com/originals/e9/e1/38/e9e13855c2bda28c77c5de63d881661e.jpg',
  15
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
  'Cat for adoption',
  'Handsome Tomas for adoption, 10 month, neutered boy. Only in good hands! 
  For people who love and respect animals! Kindly text me on Whatsapp',
  'https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/Summer-1-1024x768.jpg',
  0,
  '+962 778868XXXX',
  'Amman',
  8,
  4
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/Summer-1-1024x768.jpg',
  16
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
  'Female husky puppy for adoption',
  '3 months old female husky
  Litter trained, healthy and vet checked
  Very calm and silent dog
  Passport and vaccinated',
  'https://getyourpet.com/photos/f0a06c4e-a882-43f8-831e-c491be5ea3f1/pet-photo-317520.png',
  0,
  '+962 79569XXXX',
  'Jerash',
  9,
  1
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://getyourpet.com/photos/f0a06c4e-a882-43f8-831e-c491be5ea3f1/pet-photo-317520.png',
  17
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
  'Dog Clothing',
  'protect your dog from rain and keep him close to you in any walk and any conditions',
  'https://ae01.alicdn.com/kf/H5abb33140c5b4f509690660b4ad8c565y/Pet-Small-Dogs-Transparent-Raincoat-With-Hood-OutDoor-Walking-Waterproof-Rain-Cover-Water-Protection-Big-Dog.jpg',
  15,
  '+962 78569XXXX',
  'Mafraq',
  9,
  3
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://ae01.alicdn.com/kf/H5abb33140c5b4f509690660b4ad8c565y/Pet-Small-Dogs-Transparent-Raincoat-With-Hood-OutDoor-Walking-Waterproof-Rain-Cover-Water-Protection-Big-Dog.jpg',
  18
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
  'colorful parrot (cockatiel)',
  'very friendly bird with so nice whistling voice all the day, loves to play alot escpecially with kids',
  'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cGV0Y28/5c141c85-a909-589b-9d8f-772e0315f6a5',
  35,
  '+962 7788XXXX',
  'Ajloun',
  10,
  2
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86cGV0Y28/5c141c85-a909-589b-9d8f-772e0315f6a5',
  19
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
  'Pair for Adoption',
  'Love Bird Pair Ready to Breed + Big cage and accessories + Large Breeding Box',
  'https://previews.123rf.com/images/thaiprayboy/thaiprayboy1909/thaiprayboy190900031/132125219-cute-and-beautiful-love-birds-couple-in-the-cage-.jpg',
  0,
  '+962 7711XXXX',
  'Zarqa',
  10,
  3
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://previews.123rf.com/images/thaiprayboy/thaiprayboy1909/thaiprayboy190900031/132125219-cute-and-beautiful-love-birds-couple-in-the-cage-.jpg',
  20
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
  'Wardrobe for sale',
  'Bought from Home Centre in reasonably good condition.',
  'https://i.pinimg.com/originals/49/e7/40/49e740437e9d1da8f1cdffb654b01f19.jpg',
  80,
  '+962 77503XXXX',
  'Irbid',
  11,
  5
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://i.pinimg.com/originals/49/e7/40/49e740437e9d1da8f1cdffb654b01f19.jpg',
  21
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
  'slightly used Wardrobe',
  'HomeBox 3-door wardrobe. Used only for a year. In a very good condition!
  Delivery not included in the price.',
  'https://img.zcdn.com.au/lf/50/hash/27713/19165719/4/Verity+Multi-Purpose+Wardrobe.jpg',
  110,
  '+962 79000XXXX',
  'Amman',
  11,
  4
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://img.zcdn.com.au/lf/50/hash/27713/19165719/4/Verity+Multi-Purpose+Wardrobe.jpg',
  22
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
  'CLASSY 1 BED | BRAND NEW',
  'Beverly Residence is a modern and elegant construction that is designed as being the ideal place to call
  home. Straight lines and floor to ceiling windows give a contemporary feeling to the building and provide
  lots of sunlight in the apartments. It is ideal place to live with children as there is a designated childrens play
  area and a separate swimming pool. For physical workouts, there is an outdoor gym.',
  'https://sc04.alicdn.com/kf/HTB1OXXGOG6qK1RjSZFm7600PFXa3.png',
  150,
  '+962 78159XXXX',
  'Amman',
  12,
  4
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://sc04.alicdn.com/kf/HTB1OXXGOG6qK1RjSZFm7600PFXa3.png',
  23
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
  'Brand New American Bed With Matress',
  'We have Brand New American Bed with Matress for sale. We are Giving Free Home Delivery and Free Fixing.',
  'https://cache.adverto.sale/files/images/710_495/00/6v/006v7725p4ldb99gugv6x8v4.jpg',
  80,
  '+962 78100XXXX',
  'Zarqa',
  12,
  3
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://cache.adverto.sale/files/images/710_495/00/6v/006v7725p4ldb99gugv6x8v4.jpg',
  24
);

INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://www.autozel.com/images/Cars/330164.jpg',
  2
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://opensooq-images.os-cdn.com/previews/700x0/2a/f7/2af78f3a8cbecae4482b65db87060b284389c23f826a393dd5cdbb6ce792cd44.jpg.jpg',
  3
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/2013_Kawasaki_ZX-6R.jpg',
  4
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://citycenter.jo/image/cache/catalog/22021/250g7-550x400.jpg',
  5
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://www.lenovo.com/medias/lenovo-ideapad-3-15-almond-intel-hero.png?context=bWFzdGVyfHJvb3R8Mjc2NTE3fGltYWdlL3BuZ3xoMWUvaDU1LzEwODU5MzUxNDc0MjA2LnBuZ3wwMWIzNGFhY2M1MTljZTNiMzAwYmE3NGFjOWFiNjU2MWIxYzI4Y2I1YmJhOTM1NDVkNmZjNjVlZWYyZGEyNmIx',
  6
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://mobizil.com/wp-content/uploads/2019/03/Huawei-P30-Pro-Black.jpg',
  7
);
INSERT INTO images (
  image_url,
  adv_id
) VALUES (
  'https://mobizil.com/wp-content/uploads/2020/10/Apple-iPhone-12-Pro-Max.jpg',
  8
);


INSERT INTO favorites(user_id,adv_id)values(1,2);
INSERT INTO favorites(user_id,adv_id)values(1,3);
INSERT INTO favorites(user_id,adv_id)values(2,2);
INSERT INTO favorites(user_id,adv_id)values(2,1);
INSERT INTO favorites(user_id,adv_id)values(2,4);
INSERT INTO favorites(user_id,adv_id)values(2,3);