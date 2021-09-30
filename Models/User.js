const bcrypt=require("bcryptjs");
const validator=require("validator");
const database=require("../db.js")

let User=function(data){
  this.data=data,
  this.errors=[]
}

// clean inputs from user and remove any white spaces
User.prototype.clean=function(){
   if(typeof(this.data.username) !="string"){this.data.username=""}
   if(typeof(this.data.password) !="string"){this.data.password=""}
   if(typeof(this.data.email) !="string"){this.data.email=""}

   //get rid of bogus
   this.data={
   username:this.data.username.trim(),
   password:this.data.password,
   email:this.data.email.trim().toLowerCase()
   }
}

//check user inputs and sure it's valid in terms of min&max characters and email valid
User.prototype.validate=function(){
    return new Promise(async(resolve,reject)=>{
 if(this.data.username==""){this.errors.push("You Need To Enter Username")}
   if(this.data.username!="" && !validator.isAlphanumeric(this.data.username)){this.errors.push("Username should contain Numbers& Alpha only")}
   if(this.data.password==""){this.errors.push("You Need To Set Password")}
    if(!validator.isEmail(this.data.email)){this.errors.push("Please insert Correct Email")}
    if(this.data.username.length<4 || this.data.username.length>12){this.errors.push("Username should be between 4 to 12 characters")}
    if(this.data.password.length<6 || this.data.password.length>30){this.errors.push("Password should be between 6 to 30 characters")} 
resolve()
    })
}

//function process and insert new registration in database
User.prototype.register=function(){
    return new Promise(async (resolve,reject)=>{
      this.clean();
      await this.validate();
      if(!this.errors.length){
      //query for check if username or email used before
      var sql="SELECT * FROM customers WHERE username ='"+this.data.username+"' OR email='"+this.data.email+"' ";
        database.query(sql, (err, result)=> {
         if(result.length>0){
         if(result[0].username) this.errors.push("Username Already Taken")
         if(result[0].email) this.errors.push("Email Already Registered")
         reject(this.errors)
         }else{
//record into database - using bcrypt for hash password
        let salt=bcrypt.genSaltSync(10)
        this.data.password=bcrypt.hashSync(this.data.password,salt)
        var sql = "INSERT INTO customers Set ?";
           database.query(sql,this.data ,function (err, result) {
           if (err) throw err;
           resolve()
           });
        }
       })
     }else{
     reject(this.errors)
     }

   })
}

// Login process
User.prototype.login=function(){
  return new Promise((resolve,reject)=>{
    var sql="SELECT * FROM customers WHERE username ='"+this.data.username+"'";
    database.query(sql, (err, result)=> {
     if (err) throw err;
     if(result.length>0 && bcrypt.compareSync(this.data.password,result[0].password)) {
     resolve(result[0]);
     }
     else  {reject("Please sure you entered info Correct")}
    });
  })
}
// display products
User.prototype.displayProducts=function(){
  return new Promise((resolve,reject)=>{
var sql="SELECT * FROM products"
database.query(sql, (err, result)=> {
     if (err) throw err;
     resolve(result)
     })
  })
}








module.exports=User