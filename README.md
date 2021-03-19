# OnlineMarketplace
Group Project for CSCI3100 - Software Engineering (2021 Spring, CUHK)


All work programmed in Javascript
we are using MERN stack to implement. MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.


    
    

## Setup
In order to run the web application Run locally, you may first clone the main repository. And input the following commends:


```sh
cd /online-marketplace
npm install
cd /backend
npm install
nodemon server 
```
next, open a new terminal and write commend:

```sh
open a new terminal and write commend:   
cd /online-marketplace  
npm start  
```

The application is currently using the `.env` file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. It
can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).

## Project Structure
  
  
  ### Backend
  In the initizle stage,  we first implemented the registration and login page.  
  Registration page is connected to the mongoDB.  
  * User can input the corresponding data to the page in order to create a account.  
  Login page is capable to verify the user identity. 
  * It goes to mongoDB to check match the entities of users.  
  It is developed using html5 (Bootstrap) and express.
  
  ### Frontend
  Frontend is developed in React.js with css.
  

### 'PWA function' for mobile device add shortcut to homescreen
Provide Office notification push and Cached drowser
How to use:  
1. Using Android device wtith Chrome Broswer to open the website  
2. Click more (three dots) on the Chrome  
3. Click Add it to home screen  
4. Back to Home, the Shortcut icon will appear on the home  
5. Click the shortcut, and done!!!  
