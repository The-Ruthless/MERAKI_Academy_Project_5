const db = require("../../db/db");

const createAdvertisment = (req, res) => {
  const query = `INSERT INTO advertisements (
        title,
        description,
        image,
        price,
        phone_number,
        location,
        sub_category_id,
        user_id
      ) VALUES (?,?,?,?,?,?,?,?);`;

  const {
    title,
    description,
    image,
    price,
    phone_number,
    location,
    sub_category_id,
    user_id,
  } = req.body;
  const arr = [
    title,
    description,
    image,
    price,
    phone_number,
    location,
    sub_category_id,
    user_id,
  ];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const addToFavorite = (req, res) => {
  const query = `INSERT INTO favorites (
        user_id,
        adv_id
      ) VALUES (?,?);`;

  const { user_id, adv_id } = req.body;
  const arr = [user_id, adv_id];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createAdvertisment,
  addToFavorite,
};
