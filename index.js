require('dotenv').config();


// imports
const express    = require('express');
const app        = express();
const cors       = require("cors");
const port       = process.env.PORT;
const session    = require('express-session');
const cookieparser = require('cookie-parser');

// backloggers
const morgan     = require('morgan');
const fs         = require('fs');
const path       = require('path')

//require('./test');

// environment setups
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

const corsOptions ={
    origin:'*',  //https://mighty-dusk-25399.herokuapp.com frontend has to be here, not backend
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: "GET,POST",  //    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,

}  

app.use(session({ 
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(cookieparser());
app.use(cors(corsOptions));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())


// route imports

const welcome = require('./routes/welcome');
const logs    = require('./routes/logs');
const signup  = require('./routes/signup');
const login   = require('./routes/login');
const test    = require('./routes/test');

// routes

app.use('/',welcome);
app.use('/logs',logs);
app.use('/login',login);
app.use('/signup',signup); //sign up route
app.use('/test',test);    // test route→only recieves output, console log for debugging

// bulk id based routes

app.get("/signuptoken/:id",(req,res)=>{
    res.send(req.params.id);
});
app.get("/forgotpassword/:id",(req,res)=>{
    res.send(req.params.id);
});



// error handling
const {errorRoute} = require ("./middleware/messages");
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(errorRoute);
});


// server start

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
