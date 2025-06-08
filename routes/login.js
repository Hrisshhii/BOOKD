// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Login POST route
router.post('/', async (req, res) => {
  const { email, password } = req.body;  // Change username to email

  try {
    const user = await User.findOne({ email });  // Find by email, not username

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Compare the hashed password with bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Set session after successful login
    req.session.user = {
      username: user.username,
      email: user.email,
    };

    res.redirect('/profile'); // Redirect to profile page after login
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
