const User=require('../Models/User')
const jwt=require('jsonwebtoken')
//check if user loggedin before he go through the site
exports.MustBeLoggedIn=function(req,res,next){
   if(req.session.user){
	next()
   }else{
   res.redirect("/")
   }
}

//for display guest page or logged user
exports.home=function(req,res){           //start function
  if(req.session.user){         //check if user already loggedin
    let user=new User(req.session.user)
  user.displayProducts()     //display products available for customer
  .then((result)=>{
        let action=req.session.action;        //that action session using for show results if order success or no enough money
        if(action){                  //if action exist print it , if no just put it blank
        req.session.action="";
        res.render("start",{products:result,action})}else{res.render("start",{products:result,action:""})}
  })
  .catch()
  }else{             //if user didn't login
    //if there is error , keep it at action for display and reset session
    if(req.session.action){            //if there is errors like login or register missing forms
        let action=req.session.action;
          if(action.length>0){
             req.session.action="";
             res.render('home',{action})
          }
   }else{     //if no action session keep it blank
         res.render('home',{action:""})}

}
}            //end of function

//responsible for registeration process
exports.register=function(req,res){
  let user=new User(req.body)
  user.register()
.then(()=>{
  req.session.user={username:user.data.username,balance:1000}
    req.session.save(()=>{
       res.redirect('/')})
    })
.catch((error)=>{
req.session.action=error;
req.session.save(()=>{res.redirect('/')})
})
}

//control at login process
exports.login=function(req,res){
let user=new User(req.body)
user.login()
.then((result)=>{

  req.session.user={username:user.data.username,balance:result.balance}
    req.session.save(()=>{
       res.redirect('/')})
    })

.catch((error)=>{
  req.session.action=[error];
  req.session.save(()=>{res.redirect('/')})
})
}

//control at logout process
exports.logout=function(req,res){
req.session.destroy(function(){
res.redirect('/')
});
}

////api
exports.apiMustBeLoggedIn=function(req,res,next){
try{
req.apiUser=jwt.verify(req.body.token,process.env.SIGNATURE)
next()
}catch{
res.json("sorry you must provide valid token")
}
}

exports.apiLogin=function(req,res){
let user=new User(req.body)
user.login()
.then((result)=>{
res.json(jwt.sign({username:user.data.username},process.env.SIGNATURE,{expiresIn:'1d'}))
    })
.catch((error)=>{
res.json(error)
})
}


