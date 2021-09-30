#### Live App:
i uploaded app at hosting so you can check it Live directly from here:
[Food Fumes](http://warfumes.com)

### Project Description:
fast food service Built using Nodejs , Express & Mysql   
where customer can Login , Logout , Register , Order.  
if user has Admin privilege , he can see all orders details and cancel it.  

**i used MVC Pattern for built that App and make it organised**  
**Model** is where we include all business logic and where we module our data  
**View**: is just html pages that user see , EJS view engine used for that . 
**Controller**: responsilbe to accept incoming requests and sure to call properly Model and at the end display properly view  

### Structure Details
You Asked For:
- [x] service is responsible for authenticate and login users.
- [x] service is responsible for validating whether logged user is permitted to do specific action or not.
- [x] service is resbonsible for loggin users out from the system

- [x] How you identify and secure user's session (session, jwt).  

**for secure and identify user Session** we store it in Database , so when user send request our server can compare between session id from browser and session id stored in our server

- [x] Datastore you need to use.  

Database used for this App: Mysql  
there is customer table that store user Data ->username , password , email , balance , privileges  
cart table that store orders customer made -> item , price , owner , details  
sessions table for store sessions  
products table for store products that you offer to sale contain -> id,name,price,pic  

- [x] how to keep user's session valid.  

**keep user session Valid** by add expire date to it  and to keep it at server , as long as customer didn't logout or session didn't expired it's will be valid  

- [x] way to force invalidating sessions.   

**for invalidating session** i use expire or user can logout and in that case session will destroy using req.session.destroy()  

- [x] how to strucuture your roles and permissions.   

**how structure my roles and permissions:**  
Admin: i use for that row at customer table at database called privileges , if privileges row=admin that mean that user not normal customer and can access to all orders details and cancel any order he want.  

customer:he don't have any privileges and privileges row at database is empty.  

- [x] how to assign specific user a specific role or permission.  

**how assign specific user a specific role or permission:**  
as i mentioned early in app there is normal customer and admin , can set that by database -> customer table -> choose user you want -> update his privileges to admin (not Admin, a not A)  

- [x] You may build RESTful API to expose the essential functionlities in order for other services to consume your service.  

**API Documentaion**  
i created API for login and for order from Food Fumes Service:  
API ROUTES:  
for Login: https://warfumes.com/api/login  
you need to send that json data via post request:  
```
{  
"username":"your username",
"password":"your password"
}
```
as response you going to get token it's important to keep it to use it later for any future request:  
Here screenshot using PostMan:  
1-Login and get Token  
![Login API](https://warfumes.com/pics/api1.jpeg)  

### then You Can use: https://warfumes.com/api/order/Product_ID , for order (change product_id to product you want to order: in our example will be 1
### and as i mentioned need to send token that generated when you logged in:
![Order API](https://warfumes.com/pics/api2.jpeg) 
### finally you can find order at admin page:
![Order API](https://warfumes.com/pics/api3.jpeg) 






#### packages used
express 
express-session  
mysql  
connect-mysql  
validator  
