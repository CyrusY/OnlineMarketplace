const router = require('express').Router();     // express routers
const express = require('express');
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

/*
const hbs = require('express-handlebar');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
*/
let User = require('../models/user.model');     // required models
// const { eventNames } = require('../models/user.model');

/* Middleware *//*
app.engine('hbs',hbs({extname: '.hbs'})); // extention 
app.set('view engine', 'hbs');            // set engine
app.use(express.static(__dirname + '/public'));   // add css/images into public into hbs
app.use(session({
    secret: process.env.secret,     // key
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false}));   // allow express to pass data
app.use(express.json());
/* Middleware */

/* passport.json *//*
app.use(passport.initialize());   // set up passport
app.use(passport.session());      // stay in the login session

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    //setup user model, in "models/user.model.js"
    User.findById(id, function (err,user) {
        done(err, user);
    });
});

passport.use(new localStrategy(
  function ( username, password, done) {
    User.findOne({username: username}, function(err,user) {
      if(err) { return done(err);}
      if(!User)  {return done (null,false, {message: 'Incorrent username.'}); }

      bcrypt.compare (password, user.passport, function (err, res) {
        if(err) { return done(err);}
        if( res == false)  {
          return done (null,false, {message: 'Incorrent password.'});
        }

      });
    });
  }
));
/* passport.json */


router.route('/').get((req, res) => {       //  get request: 'localhost:3000/users/' case
  User.find()       //get list of users in mongodb atlas
    .then(users => res.json(users))     //after find, return users in json format (from DB)
    .catch(err => res.status(400).json('Error: ' + err));       // return status 400 if error 
});

router.route('/add').post((req, res) => {  // post request ,  could be tested in insomnia 
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;          // increase the security level by using bcrypt
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


const userCtrl = {
  login: async (req, res) => {try {
    const email = req.body.email;
    const password = req.body.password; 
   
   
  
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({msg: "This email does not exist."})
    
    if (password != user.password) {
      return res.status(400).json({msg: "Password is incorrect."})
   }
   
  
   const token = jwt.sign({ email: user.email, id:  user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" });
   
    

   res.status(200).json({ result: user, token });
  } catch (err) {
    return res.status(500).json({msg: err.message})
  }},
  getAccessToken: (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken
        if(!rf_token) return res.status(400).json({msg: "Please login now!"})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(400).json({msg: "Please login now!"})

            const access_token = createAccessToken({id: user.id})
            res.json({access_token})
          })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
 },abc: (req, res) => {
  try {
    console.log("sdsd213123123123135d");
    res.send('<p>some html</p>');
  } catch (err) {
    console.log('some h');
      return res.status(500).json({msg: err.message})
  }

}
}
router.get('/abc', auth,userCtrl.abc)
router.post('/login', userCtrl.login)
router.post('/refresh_token', userCtrl.getAccessToken)


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


const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '15d'})
}

module.exports = router;    // exporting router