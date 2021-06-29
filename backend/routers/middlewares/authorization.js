const jwt = require("jsonwebtoken");
const db = require("../../db/db");

let roleFilterbyid;
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
      ORDER BY roles_permissions.id;`;
      db.query(query, (err, result) => {
        roleFilterbyid = result.filter((elem) => elem.id === req.token.role);

        if (!roleFilterbyid.some((elem) => elem.permission === crud)) {
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
