const Admin=require('../Models/Admin');


exports.displayOrders=function(req,res){
let admin=new Admin(req.session.user)
admin.displayOrders()
.then((result)=>{
res.render("admin",{orders:result})
})
.catch((result)=>{
res.render("admin",{orders:[{item:result}]})
})
}


exports.deleteOrders=function(req,res){
let admin=new Admin(req.session.player)
		admin.delete(req.params.id).then((result)=>{
        res.redirect('/admin')
		})
		.catch()

}