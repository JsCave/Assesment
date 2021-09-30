const express=require('express');
const router=express.Router();
const usercontrol=require("./controllers/userControl")
const cartcontrol=require("./controllers/cartControl")
const admincontrol=require("./controllers/adminControl")

//routers that control at basic user operations
router.get('/',usercontrol.home)
router.post('/login',usercontrol.login)
router.post('/register',usercontrol.register)
router.get('/logout',usercontrol.logout)

//routers that responsible for cart operations
router.get('/cart',usercontrol.MustBeLoggedIn,cartcontrol.displayOrders)
router.get('/cart/:id',usercontrol.MustBeLoggedIn,cartcontrol.order)

// router for users with admin permission only
router.get('/admin',usercontrol.MustBeLoggedIn,admincontrol.displayOrders)
router.get('/admin/delete/:id',usercontrol.MustBeLoggedIn,admincontrol.deleteOrders)

module.exports=router