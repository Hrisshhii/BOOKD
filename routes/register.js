const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if needed

const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ error: 'Username already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 🔑 Hash the password

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
