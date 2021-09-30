const validator=require("validator")
const database=require("../db.js")



let Cart=function(data,bodyData){
this.data=data
this.bodyData=bodyData
if(!this.bodyData.method)this.bodyData.method="Order via Site"
}



Cart.prototype.order=function(productID){   //start order function
	return new Promise(async(resolve,reject)=>{   //start promise
     if(!validator.isNumeric(productID)){reject("product not Available")}else{   //if id type= number
       var sql="SELECT * FROM products WHERE id='"+productID+"'"      
       database.query(sql, (err, result)=> {          //check if product with same id available
       if (err) throw err;
       if(result.length>0){                          //if available
             var sql2="SELECT * FROM customers WHERE username='"+this.data.username+"'"
             database.query(sql2, (err, result2)=> {      //check if customer have enough money
             if(result2[0].balance<result[0].price){ reject("you don't have enough money for order That");} //if no money
             else{        //if customer have enough money
             let balance=result2[0].balance-result[0].price
             var sql3="UPDATE customers SET balance = '"+balance+"' WHERE username = '"+this.data.username+"'"
             database.query(sql3, (err)=> {   //update customer balance and deduct amount he spent
             if (err) throw err
              this.data.method="Order Via Site";
                   var sql4 = "INSERT INTO cart (item,price,owner,details) VALUES ('"+result[0].name+"','"+result[0].price+"','"+this.data.username+"','"+this.bodyData.method+"')";
                   database.query(sql4, (err)=> {   //insert customer order in database
                   if (err) throw err
                   resolve(balance)
                   }) //end of insert query
             }) // end of update customer balance query
             } //end of condition if customer have enough money
             }) // end of query to check customer balance
       }else{reject("product not Available")} //if product id not in database
     }) // end of product query
   } //close of id=number condition 
	}) //end promise

}  // end of order function




Cart.prototype.displayOrders=function(){
  return new Promise((resolve,reject)=>{
        let sql="SELECT * FROM cart WHERE owner='"+this.data.username+"'"
        database.query(sql, (err, result)=> {
         if (err) throw err
        if(result.length>0){resolve(result)}else{reject("You Didn't Order Before")}
        })
  })

}








module.exports=Cart