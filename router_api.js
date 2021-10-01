const apiRouter=require("express").Router()

const usercontrol=require("./controllers/userControl")
const cartcontrol=require("./controllers/cartControl")
const admincontrol=require("./controllers/adminControl")

const cors=require('cors')
apiRouter.use(cors())

apiRouter.post('/login',usercontrol.apiLogin)
apiRouter.get('/order/:id',usercontrol.apiMustBeLoggedIn,cartcontrol.apiOrder)
module.exports=apiRouter
