// routes/profile.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Profile route
router.get('/', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login'); // Redirect to login if not logged in
  }
  res.sendFile(path.join(__dirname, '../FrontEnd/profile.html')); 
});

module.exports = router;
