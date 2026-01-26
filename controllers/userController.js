const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.createUser(name, email);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const [users] = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
