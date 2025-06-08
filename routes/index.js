// Import required modules
const express = require('express');
const path = require('path'); // Add this line to import the 'path' module
const axios = require("axios");
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/index.html')); // Use path to resolve the file path
});

// Fix the incorrect route serving registration.html
router.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/profile.html'));
});


// Login Page Route
router.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, '../FrontEnd/Login.html')); // Serve books list page
});

const GOOGLE_BOOKS_API_KEY = "AIzaSyDnjOPLrgyU39flAbKMB9MXUEEQqg90Y10"; // Replace with your API Key

// Fetch books from Google Books API
router.get("/api/books", async (req, res) => {
    try {
        const query = req.query.q || "fiction"; // Default search query
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_BOOKS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

// Load user from MongoDB using session
const User = require('../models/User'); // Make sure this path is correct

router.get('/get-user', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Not logged in' });
    }

    try {
        const user = await User.findOne({ username: req.session.user.username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../FrontEnd/login.html'));
  });

module.exports = router;

