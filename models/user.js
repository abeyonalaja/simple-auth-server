
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Model
const userSchema = new Schema( {
  email    : { type : String, unique : true },
  password : String
});

// Create model class
const ModelClass = mongoose.model( 'user', userSchema );

// Export Model
module.exports = ModelClass;
