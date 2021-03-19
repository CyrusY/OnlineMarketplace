const mongoose = require('mongoose');   //require mongoose

const Schema = mongoose.Schema;     //mongoose schema start same

const productSchema = new Schema({     //user schema with one field
    productName: { type: String, required: true},
    Price: { type: Number, required: true, defaultValue: false},
    Status: { type: String, required: true},        // status either : new/ used
    postDate: { type: Date, default: Date.now},
    productDescription: { type: String, default: "No description."},
    ownerID: { type: mongoose.Schema.Types.ObjectId, required},
});

const products = mongoose.model('User', userSchema);

module.exports = products;