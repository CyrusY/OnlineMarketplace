const mongoose = require('mongoose');   //require mongoose

const Schema = mongoose.Schema;     //mongoose schema start same

const productSchema = new Schema({     //product schema with one field
    productName: { type: String, required: true},
    price: { type: Number, required: true, defaultValue: false},
    condition: { type: String, required: true},        // condition either : new/ used
    postDate: { type: Date, default: Date.now},
    productDescription: { type: String, default: "No description."},
    ownerID: { type: mongoose.Schema.Types.ObjectId, required: true},
    productPhoto: {type: String, required: true},
});

const Products = mongoose.model('Products', productSchema);
//
module.exports = Products;