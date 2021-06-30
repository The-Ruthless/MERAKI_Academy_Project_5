const jwt = require("jsonwebtoken");
const db = require("../../db/db");

const authorization = (crud) => {
  try {
    return (req, res, next) => {
      const query = `SELECT 
      roles.role, 
      roles.id,
      permissions.permission
      FROM roles_permissions
      INNER JOIN permissions ON roles_permissions.permission_id = permissions.id
      INNER JOIN roles ON roles_permissions.role_id = roles.id
      WHERE role = "${req.token.role}";`;

      db.query(query, (err, result) => {
        if (!result.some((elem) => elem.permission === crud)) {
          return res.status(403).json({ message: "forbidden" });
        }
        next();
      });
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = authorization;
