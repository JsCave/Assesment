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

let sessionOptions=session({
  secret:process.env.SECRET,
  store: new MysqlStore(options),
  resave:false,
  saveUninitialized:false,
  cookie:{maxAge:1000*60*60*24,httpOnly:true}    //session valid for 24 hours
})


app.use(sessionOptions);

app.use(function(req,res,next){
res.locals.user=req.session.user
next();
})

app.use(csurf())

app.use(function(req,res,next){
res.locals.csrfToken=req.csrfToken()
next()
})
const router=require("./router")


app.use(express.static('public'))
app.set('views','views')
app.set('view engine', 'ejs')

app.use('/',router)

app.use(function(err,req,res,next){
if(err){
if(err.code=="EBADCSRFTOKEN"){
  req.session.action=['CROSS SITE REQUEST FORGERY DETECTED']
  req.session.save(()=>res.redirect('/'))
}else{res.render('404')}
}
})

module.exports=app