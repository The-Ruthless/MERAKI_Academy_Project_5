const db = require("../../db/db");

const filterAllCategoriesByLocation = (req, res) => {
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
  WHERE location = '${req.params.location}'
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};





const filterAllCategoriesByPrice = (req, res) => {
    const {min , max} = req.body
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
    WHERE price BETWEEN ${min} AND ${max}
    ORDER BY published_at DESC`;
  
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
};



const filterAllCategoriesByPriceAndLocation = (req, res) => {
    const {min , max , location} = req.body
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
    WHERE price BETWEEN ${min} AND ${max}  AND  location = '${location}'
    ORDER BY published_at DESC`;
  
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
};





const showByCategoryByLocation = (req, res) => {
  const {category , location } = req.body
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
  WHERE main_categories.main_category='${category}' AND location = '${location}'
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


const showByCategoryByPrice = (req, res) => {
    const {category , min , max } = req.body
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
  WHERE main_categories.main_category='${category}' AND price BETWEEN ${min} AND ${max}
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};




const showByCategoryByPriceAndLocation = (req, res) => {
    const {category , location , min , max  } = req.body
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
  WHERE main_categories.main_category='${category}' AND location = '${location}' AND price BETWEEN ${min} AND ${max}
  ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};




const showBySubCategoryByLocation = (req, res) => {
  const {subCategory , location } = req.body
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
    WHERE sub_categories.sub_category='${subCategory}' AND location = '${location}'
    ORDER BY published_at DESC`;

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


const showBySubCategoryByPrice = (req, res) => {
    const {subCategory , min , max  } = req.body
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
      WHERE sub_categories.sub_category='${subCategory}' AND price BETWEEN ${min} AND ${max}
      ORDER BY published_at DESC`;
  
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
};


const showBySubCategoryByPriceAndLocation = (req, res) => {
    const {subCategory , min , max , location  } = req.body
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
      WHERE sub_categories.sub_category='${subCategory}' AND price BETWEEN ${min} AND ${max} AND location = '${location}'
      ORDER BY published_at DESC`;
  
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
};




module.exports = {
    filterAllCategoriesByLocation,
    filterAllCategoriesByPrice,
    filterAllCategoriesByPriceAndLocation,
    showByCategoryByLocation,
    showByCategoryByPrice,
    showByCategoryByPriceAndLocation,
    showBySubCategoryByLocation,
    showBySubCategoryByPrice,
    showBySubCategoryByPriceAndLocation
    
};