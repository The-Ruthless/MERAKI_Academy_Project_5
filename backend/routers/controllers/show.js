const db = require("../../db/db");

const showAllCategories = (req, res) => {
  const query = `SELECT 
  advertisements.id,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.location,
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  ORDER BY ${req.query.sortOrder}`;
  //http://localhost:5000/advertisements/all?sortOrder=price ASC

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showByCategory = (req, res) => {
  const query = `SELECT 
  advertisements.id,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.location,
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  WHERE main_categories.main_category='${req.query.mainCategory}'
  ORDER BY ${req.query.sortOrder}`;
  //http://localhost:5000/advertisements/maincat?mainCategory=motors&sortOrder=price ASC
  
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showBySubCategory = (req, res) => {
  const query = `SELECT 
    advertisements.id,
    advertisements.title,
    advertisements.description,
    advertisements.price,
    advertisements.image,
    advertisements.location,
    advertisements.published_at,
    sub_categories.sub_category,
    main_categories.main_category,
    users.id,
    users.full_name
    FROM trading_website.advertisements 
    INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
    INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
    INNER JOIN users ON advertisements.user_id= users.id
    WHERE sub_categories.sub_category='${req.query.subCategory}'
    ORDER BY ${req.query.sortOrder}`;
    //http://localhost:5000/advertisements/subcat?subCategory=laptops&sortOrder=price ASC

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showByUserId = (req, res) => {
  const query = `SELECT 
  advertisements.id,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.location,
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  WHERE users.id='${req.params.userId}'
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showLastTwenty = (req, res) => {
  const query = `SELECT 
  advertisements.id,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.location,
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  ORDER BY published_at DESC
  LIMIT 0, 20`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showMyFavorites = (req, res) => {
  const query = `SELECT 
  favorites.id,
  advertisements.id,
  users.full_name,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.location,
  sub_categories.sub_category,
  main_categories.main_category
  FROM favorites
  INNER JOIN advertisements ON favorites.adv_id=advertisements.id
  INNER JOIN sub_categories ON advertisements.sub_category_id=sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id=main_categories.id
  INNER JOIN users ON favorites.user_id=users.id
  WHERE favorites.user_id='${req.params.userId}'
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  showAllCategories,
  showByCategory,
  showBySubCategory,
  showByUserId,
  showLastTwenty,
  showMyFavorites,
};
