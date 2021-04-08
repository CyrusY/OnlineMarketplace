const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose'); // used to connect to mongoDB database

require('dotenv').config();     // having environment variable in .env file 

const app = express();
const port = process.env.PORT || 5000
/* create express server with the port no. local host 5000 */

app.use(cors());
app.use(express.json());
app.use(cookieParser());
/* allowed to pass and receive json */
/* Express cors middleware */

a=1
const uri = process.env.ATLAS_URI;      // database uri, get from Mongo Altas dashboard (in .env file)
/* ATLAS_URI - environmental variable */
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);  // pass uri, start connection.
    //  constructor used for the new Server Discover and Monitoring engine
    //  "useNewUrlParser: true" - pass mongodb connection strings
    //  "useCreateIndex: true" - deparecating insurer index function


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})  // message to concole once the connection is success

const usersRouter = require('./routes/users');    // go to path
/*requiring files*/

app.use('/users', usersRouter);
// import to use

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
/*start the server, frist "cd online-marketplace/backend", "nodemon server" in terminal to start*/