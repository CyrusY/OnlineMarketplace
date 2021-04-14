const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');


const hbs = require('express-handlebars');    //create views in express application
const path = require('path');

const mongoose = require('mongoose'); // used to connect to mongoDB database

require('dotenv').config();     // having environment variable in .env file 

const app = express();
const port = process.env.PORT || 5000
/* create express server with the port no. local host 5000 */

app.use(cors());
app.use(express.json());
/* allowed to pass and receive json */
/* Express cors middleware */
app.use(express.static(path.join(__dirname, 'public')));   // serving static file
app.use(cookieParser());

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

const productsRouter = require('./routes/products');
app.use('/products', productsRouter)
var app2 =  express();
//chat
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');
app2.use(cors());
app2.use(router);
const server = http.createServer(app2);
var io = require('socket.io')(server);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});


server.listen(process.env.PORT || 5001, () => console.log(`Server has started on 5001.`));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
/*start the server, frist "cd online-marketplace/backend", "nodemon server" in terminal to start*/