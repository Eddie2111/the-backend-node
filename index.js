require('dotenv').config();

const express    = require('express');
const app        = express();
const cors       = require("cors");
const bodyParser = require('body-parser');
const port       = process.env.PORT;
const session    = require('express-session');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}  

app.use(session({ 
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(cors(corsOptions));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())


const welcome = require('./routes/welcome');
const logs = require('./routes/logs');
const signup = require('./routes/signup');
app.use('/',welcome);
app.use('/',logs);
app.use('/',signup);
  
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
