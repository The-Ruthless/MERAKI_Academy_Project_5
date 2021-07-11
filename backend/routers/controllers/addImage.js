const db = require("../../db/db");

const addImage = (req, res) => {

  const query = `INSERT INTO images (
        image_url,
        adv_id
      ) VALUES (?,?);`;

  const {
    image_url,
    adv_id,
  } = req.body;
  const arr = [
    image_url,
    adv_id
  ];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};


module.exports = {
    addImage
  };