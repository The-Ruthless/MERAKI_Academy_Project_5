const db = require("../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  let { email, password, full_name } = req.body;
  // role_id >>> 1 = user
  email = email.toLowerCase();
  password = await bcrypt.hash(password, 10);

  const query = `INSERT INTO users ( email, password, full_name) VALUE (?,?,?)`;
  const arr = [email, password, full_name];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const editUser = async (req, res) => {
  const editUserId = req.params.id;
  const {
    full_name,
    age,
    gender,
    nationality,
    phone_number,
    current_location,
  } = req.body;
  const query = `UPDATE users 
  SET full_name = ? , age = ? , gender = ? , nationality = ? , phone_number = ? ,current_location = ? 
  WHERE id = ${editUserId} `;
  const arr = [
    full_name,
    age,
    gender,
    nationality,
    phone_number,
    current_location,
  ];

  db.query(query, arr, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createNewUser,
  editUser,
};
