const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // for password hashing

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String, default: "" },
  profilePic: { type: String, default: "" },
  favorites: [String],
  currentlyReading: [String],
  booksRead: [String],
  readlist: [String],
  likedReviews: [String],
  savedLists: [String],
  followers: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] }, // Array of user references
  following: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] }, // Array of user references
});

// Pre-save hook to hash password before saving it to the database
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // Skip if password wasn't modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password during login
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password); // Compare hashed passwords
};

module.exports = mongoose.model('User', userSchema);
