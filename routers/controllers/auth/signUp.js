const db = require("../../../db/db");
const bcrypt = require("bcrypt");

const createNewUser = async (req, res) => {
  try {
    let { email, password, full_name } = req.body;
    email = email.toLowerCase();
    password = await bcrypt.hash(password, 10);

    const query = `INSERT INTO users ( email, password, full_name, role_id) VALUE (?,?,?,1)`;
    const arr = [email, password, full_name];

    db.query(query, arr, (err, result) => {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  } catch (error) {
    res.json("passOrMailError");
  }
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

const userInform = (req,res)=>{
  const query = `SELECT 
  full_name,age,gender,phone_number,current_location,nationality FROM users Where id = ${req.params.id};`
  //http://localhost:5000/profile/1

  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createNewUser,
  editUser,
  userInform
};
