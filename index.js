require('dotenv').config();


// imports
const express    = require('express');
const app        = express();
const cors       = require("cors");
const port       = process.env.PORT;
const session    = require('express-session');
//require('./test');

// environment setups
const corsOptions ={
    origin:'*',  //https://mighty-dusk-25399.herokuapp.com/
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

app.get("/signuptoken/:id",(req,res)=>{
    res.send(req.params.id);
});
app.get("/forgotpassword/:id",(req,res)=>{
    res.send(req.params.id);
});



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
  });





// server start

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
