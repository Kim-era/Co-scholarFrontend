const db = require("../config/db");

exports.createUser = (name, email) => {
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  return db.execute(sql, [name, email]);
};

exports.getAllUsers = () => {
  const sql = "SELECT * FROM users";
  return db.execute(sql);
};
