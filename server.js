const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Frontend directory
app.use(express.static(path.join(__dirname, 'FrontEnd')));

// Session management
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Routes
app.use('/register', require('./routes/register'));  // Register route
app.use('/login', require('./routes/login'));        // Login route
app.use('/profile', require('./routes/profile'));    // Profile route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
