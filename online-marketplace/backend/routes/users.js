const router = require('express').Router();     // express routers
let User = require('../models/user.model');     // required models

router.route('/').get((req, res) => {       //  get request: 'localhost5000/users/' case
  User.find()       //get list of users in mongodb atlas
    .then(users => res.json(users))     //after find, return users in json format (from DB)
    .catch(err => res.status(400).json('Error: ' + err));       // return status 400 if error 
});

router.route('/add').post((req, res) => {   // post request ,  could be tested in insomnia 
    const username = req.body.username;
    const email = req.body.email.toLowerCase();     // lowercase email
    const password = req.body.password;             // can increase the security level by using bcrypt
    const validPassword = req.body.validPassword;
    const displayName = req.body.displayName;
    const description = req.body.description;    // by default: "No description."
    //const rating = Number(req.body.rating);    // by default: 0
  

    function validateEmail(test) {
        const emailRegexp = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
        if (test.match(emailRegexp))
            return true;
        else
            return false;
    }

    if (!validateEmail(email)) {
        return res.status(400).json({msg: "Email is in incorrect format."})
    }

    if (password.length < 5) {
       return res.status(400).json({msg: "The password need to be at least 5 characters long."})
    }

    if (password != validPassword) {
       return res.status(400).json({msg: "Passwords do not match. Please re-enter it again."})
    }

  // validation
    const newUser = new User({username, email, password, displayName, description/*, rating*/});     // create new user

    newUser.save()        // save the new user to DB
     .then(() => res.json('User added!'))        // return "User added" if add success
     .catch(err => res.status(400).json('Error: ' + err));   // return error if failed
});


router.route('/:id').get((req, res) => {        
    // id object was created by mongo automatically since object created , get request, return that test by that id
    User.findById(req.params.id)          // findByID
    .then(User => res.json(User))       // return as json
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {     //pass in object id, delete request, delete that object by id
    User.findByIdAndDelete(req.params.id)       //findByIdAndDelete
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {    //update data of the object by id
    User.findById(req.params.id)
    .then(user => {
        /* start of the update from the post request, received from route('/update/:id') */
      user.displayName = req.body.displayName;
      user.description = req.body.description;
        /* end */

      user.save()
        .then(() => res.json('User information updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/changePW/:id').post((req, res) => {    //update data of the object by id
    User.findById(req.params.id)
    .then(user => {
        /* start of the update from the post request, received from route('/update/:id') */
      const oldPassword = req.body.oldPassword;
      
      if ( oldPassword !== user.password ) {
        console.log("user.password: " + user.password);
        //return res.status(400).json({msg: "Wrong old password."})
      }

      user.password = req.body.password;

      if (req.body.password !==  req.body.validPassword) {
        return res.status(400).json({msg: "Passwords do not match."})
      }
        /* end */

      user.save()
        .then(() => res.json('Password changed!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;    // exporting router