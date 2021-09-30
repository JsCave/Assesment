const Cart=require('../Models/Cart')

exports.order=function(req,res){
let cart=new Cart(req.session.user,req.body)
cart.order(req.params.id)
.then((result)=>{
	req.session.user.balance=result
	req.session.action="Order Sent Successfuly"
    req.session.save(()=>{res.redirect('/')})

})
.catch((result)=>{
    req.session.action=result
	req.session.save(()=>{res.redirect('/')})
})
}


exports.displayOrders=function(req,res){
let cart=new Cart(req.session.user,req.body)
cart.displayOrders()
.then((result)=>{
res.render("orders",{orders:result})
})
.catch((result)=>{
res.render("orders",{orders:[{item:result}]})
})
}

////api
exports.apiOrder=function(req,res){
let cart=new Cart(req.apiUser,req.body)
cart.order(req.params.id)
.then((result)=>{
	res.json(result)

})
.catch((result)=>{
   res.json(result)
})
}