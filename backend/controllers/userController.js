const User = require("../models/userModel");
const { nanoid } = require("nanoid");

exports.createAnonymousUser = async (req, res) => {
  try {
    const username = `Anon-${Math.floor(Math.random() * 10000)}`;
    const userId = nanoid(10);

    const newUser = new User({ username, userId });
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
