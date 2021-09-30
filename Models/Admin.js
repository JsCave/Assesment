const validator=require("validator")
const database=require("../db.js")

let Admin=function(data){
this.data=data
}



Admin.prototype.displayOrders=function(){   //start of display orders function
  return new Promise((resolve,reject)=>{   //promise start
    let sql="SELECT * FROM customers WHERE username='"+this.data.username+"'"
    database.query(sql, (err, result)=> {     //start of query
    	if(result[0].privileges=="admin"){    //if user has admin authority 
        let sql="SELECT * FROM cart"
        database.query(sql, (err, result)=> {     //start of query
         if (err) throw err
        if(result.length>0){resolve(result)}else{reject("there is no orders yet")}
        }) //end of query
    } // end of if(result[0].privileges=="admin")
    else{ // if user not admin
    reject("you don't have Acess")
    } //end of else statement
    }) //end of query
  })   //promise end

} // end of display orders function

Admin.prototype.delete=function(orderId){
return new Promise((resolve,reject)=>{
var sql = "Delete From cart Where id='"+orderId+"'";
database.query(sql ,function (err, result) {
    if (err) throw err;
    resolve("Order Cancelled")
  });
})
  }

module.exports=Admin