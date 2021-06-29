const db = require("../../db/db");

const searchAll = (req, res) => {
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
        AND advertisements.title LIKE '%${req.query.keyword}%'
        ORDER BY published_at DESC`;
  //http://localhost:5000/search/all?keyword=for sale

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
    searchAll,
  };
  