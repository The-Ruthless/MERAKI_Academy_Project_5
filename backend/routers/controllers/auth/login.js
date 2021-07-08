const db = require("../../../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT users.id , users.is_deleted, users.email , users.password, users.full_name, users.age, users.gender, 
    users.nationality , users.phone_number , users.current_location , users.role_id , roles.role
    FROM users
    INNER JOIN roles ON users.role_id = roles.id
    WHERE email = "${email}";`;

    db.query(query, async (err, result) => {
      if (err) throw err;
      //the result contains all data of the user of that specific email : name , mail , pass ...etc
      if (!result[0]) return res.status(400).json("The email doesn't exist");
      const valid = await bcrypt.compare(password, result[0].password);
      if (valid) {
        const payload = {
          userId: result[0].id,
          email : result[0].email,
          full_name: result[0].full_name,
          role_id: result[0].role_id,
          role: result[0].role,

          age : result[0].age,
          gender : result[0].gender,
          nationality : result[0].nationality,
          phone_number : result[0].phone_number,
          current_location: result[0].current_location,
        };
        const options = {
          expiresIn: "60m",
        };
        return res
          .status(200)
          .json(jwt.sign(payload, process.env.SECRET, options));
      } else {
        return res.status(403).json("The password you’ve entered is incorrect");
      }
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  login,
};
