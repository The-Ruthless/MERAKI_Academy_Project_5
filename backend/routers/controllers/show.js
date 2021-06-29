const db = require("../../db/db");

const showAllCategories = (req, res) => {
  const query = `SELECT 
  advertisements.id,
  advertisements.title,
  advertisements.description,
  advertisements.price,
  advertisements.image,
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  ORDER BY published_at DESC`;

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
  advertisements.published_at,
  sub_categories.sub_category,
  main_categories.main_category,
  users.id,
  users.full_name
  FROM trading_website.advertisements 
  INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
  INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
  INNER JOIN users ON advertisements.user_id= users.id
  WHERE main_categories.main_category='${req.params.category}'
  ORDER BY published_at DESC`;

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
    advertisements.published_at,
    sub_categories.sub_category,
    main_categories.main_category,
    users.id,
    users.full_name
    FROM trading_website.advertisements 
    INNER JOIN sub_categories ON advertisements.sub_category_id= sub_categories.id
    INNER JOIN main_categories ON sub_categories.main_category_id= main_categories.id
    INNER JOIN users ON advertisements.user_id= users.id
    WHERE sub_categories.sub_category='${req.params.subCategory}'
    ORDER BY published_at DESC`;

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

module.exports = {
  showAllCategories,
  showByCategory,
  showBySubCategory,
  showByUserId,
};
