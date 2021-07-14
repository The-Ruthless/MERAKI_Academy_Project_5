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


const getImages = (req, res) => {
  const adv_id = req.params.id
   const query = `SELECT image_url FROM trading_website.images WHERE adv_id = ${adv_id};`;
 
   db.query(query,(err, result) => {
     if (err) throw err;
     res.json(result);
   });
 };


module.exports = {
    addImage,
    getImages
  };