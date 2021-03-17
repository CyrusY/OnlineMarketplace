const mongoose = require('mongoose');   //require mongoose

const Schema = mongoose.Schema;     //mongoose schema start same

const userSchema = new Schema({     //user schema with one field
  username: { type: String, required: true, unique: true, trim: true, minlength: 3},
  email: { type: String, required: true, unique: true, defaultValue: false},     // TODO:  '@'type
  password: { type: String, required: true, minlength: 5},        // TODO: increase security (ie. include number)
  displayName: { type: String, required: true},
  rating: { type: Number, default: 0, min:0 , max:5 },
  description: { type: String, maxlength: 255, default: "No description." },
},
{
  timestamps: true, // tells mongoose to automatically assign createdAt and updatedAt fields to the schema
});

const User = mongoose.model('User', userSchema);

module.exports = User;