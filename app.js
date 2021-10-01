const express=require('express');
const session=require('express-session');
const MysqlStore=require('connect-mysql')(session);
const csurf=require('csurf')
const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api',require('./router_api'))

const  options = {
      config: {
        user: process.env.MYSQL_USERNAME, 
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      }
};

let sessionOptions=session({                //used for store session and cookie at database
  secret:process.env.SECRET,
  store: new MysqlStore(options),
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24,httpOnly:true}    //session valid for 24 hours
})


app.use(sessionOptions);

app.use(function(req,res,next){             //that use for make access to data that display to user more easy instead of send it every time user making request
res.locals.user=req.session.user
next();
})

app.use(csurf())      //use csurf package for forbin csrf attacks

app.use(function(req,res,next){
res.locals.csrfToken=req.csrfToken()
next()
})
const router=require("./router")


app.use(express.static('public'))
app.set('views','views')
app.set('view engine', 'ejs')

app.use('/',router)

app.use(function(err,req,res,next){         //if dedect csrf attack , put error at action session for display
if(err){
if(err.code=="EBADCSRFTOKEN"){
  req.session.action=['CROSS SITE REQUEST FORGERY DETECTED']
  req.session.save(()=>res.redirect('/'))
}else{res.render('404')}
}
})

module.exports=app
