const db = require("../../db/db");

const showFilterSearchSortAll = (req, res) => {
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
  AND advertisements.title LIKE '%${req.query.keyword}%'
  WHERE location like '${req.query.location}' 
  AND price BETWEEN ${req.query.min} AND ${req.query.max} 
  ORDER BY ${req.query.sortOrder}`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showFilterSearchSortCategory = (req, res) => {
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
  WHERE main_categories.main_category LIKE '${req.query.category}' 
  AND advertisements.title LIKE '%${req.query.keyword}%'
  AND location LIKE '${req.query.location}'
  AND price BETWEEN ${req.query.min} AND ${req.query.max} 
  ORDER BY ${req.query.sortOrder}`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const showFilterSearchSortSubCategory = (req, res) => {
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
    WHERE sub_categories.sub_category LIKE '${req.query.subCategory}' 
    AND advertisements.title LIKE '%${req.query.keyword}%'
    AND location LIKE '${req.query.location}'
    AND price BETWEEN ${req.query.min} AND ${req.query.max} 
    ORDER BY ${req.query.sortOrder}`;

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

const showLastSix = (req, res) => {
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
  LIMIT 0, 6`;

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
  showFilterSearchSortAll,
  showFilterSearchSortCategory,
  showFilterSearchSortSubCategory,
  showByUserId,
  showLastSix,
  showMyFavorites,
};
