### Project Description:
fast food service Built using Nodejs , Express & Mysql   
where customer can Login , Logout , Register , Order.  
if user has Admin privilege , he can see all orders details and cancel it.  

**i used MVC Pattern for built that App and make it organised**  
**model** is where we include all business logic and where we module our data  
**view**: is just html user see  
**controller**: responsilbe to accept incoming request and sure to call properly Model and at the end display properly view  
#### Structure Details

**for secure and identify user Session** we store it in Database , so when user send request our server can compare between session id from browser and session id stored in our server

Database used for this App: Mysql  
there is customer table that store user Data ->username , password , email , balance , privileges  
cart table that store orders customer made -> item , price , owner , details  
sessions table for store sessions  
products table for store products that you offer to sale contain -> id,name,price,pic  

**keep user session Valid** by add expire date to it  and to keep it at server , as long as customer didn't logout or session didn't expired it's will be valid

**for invalidating session** i use expire or user can logout and in that case session will destroy using req.session.destroy()

**how structure my roles and permissions:**  
Admin: i use for that row at customer table at database called privileges , if privileges row=admin that mean that user not normal customer and can access to all orders details and cancel any order he want.  

customer:he don't have any privileges and privileges row at database is empty.

**how assign specific user a specific role or permission:**  
as i mentioned early in app there is normal customer and admin , can set that by database -> customer table -> choose user you want -> update his privileges to admin (not Admin, a not A)


API Documentaion




#### packages used
express 
express-session  
mysql  
connect-mysql  
validator  