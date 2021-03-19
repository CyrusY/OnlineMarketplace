const express = require('express');
const router = express.Router();     // express routers
const multer = required('multer');   // upload photo

let Products = require("../models/products");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../public/uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

const upload = multer({storage: storage});


router.route('/').get((req, res) => {       //  get request: 'localhost5000/products/' case
    Products.find()       //get list of users in mongodb atlas
        .then(users => res.json(users))     //after find, return users in json format (from DB)
        .catch(err => res.status(400).json('Error: ' + err));       // return status 400 if error 
});

router.route('/add', upload.single("productPhoto")).post((req, res) => {   // post request ,  could be tested in insomnia 
    const pName = req.body.pName;
    const pPrice = Number(req.body.pPrice);
    const pStatus = req.body.pStatus;
    const postDate = Date.parse(req.body.postDate);
    const pDescription = req.body.pDescription;    // by default: ""
    const productPhoto = req.file.originalname;

  // validation
    const newProduct = new User({pName, pPrice, pStatus, postDate, pDescription, productPhoto});     // create new user

    newProduct.save()        // save the new user to DB
     .then(() => res.json('Product uploaded!'))        // return "User added" if add success
     .catch(err => res.status(400).json('Error: ' + err));   // return error if failed
});

router.route('/:id').get((req, res) => {        
  // id object was created by mongo automatically since object created , get request, return that product photo by that id
  Products.findById(req.params.id)          // findByID
    .then(Product => res.json(Product))       // return as json
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id', upload.single("productName")).post((req, res) => {    //update data of the object by id
  Products.findById(req.params.id)
  .then(Product => {
      /* start of the update from the post request, received from route('/update/:id') */
      product.pName = req.body.pName;
      product.pPrice = req.body.pPrice;
      product.pStatus = req.body.pStatus;
      product.pDescription = req.body.pDescription;
      product.productPhoto = req.file.originalname;
      /* end */

    user.save()
      .then(() => res.json('User information updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {     //pass in object id, delete request, delete that object by id
  Products.findByIdAndDelete(req.params.id)       //findByIdAndDelete
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});