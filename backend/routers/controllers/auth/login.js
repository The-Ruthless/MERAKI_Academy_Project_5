const db = require("../../../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users
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
          full_name: result[0].full_name,
          current_location: result[0].current_location,
          role: result[0].role,
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
