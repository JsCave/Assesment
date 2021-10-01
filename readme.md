# Food Fumes Project
#### Live App:
i uploaded app at hosting so you can check it Live directly from here:
[Food Fumes](http://warfumes.com)  
```
for test it as admin use:
username:admin
password:qwerty

```

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
- [x] **service is responsible for authenticate and login users.**
- [x] **service is responsible for validating whether logged user is permitted to do specific action or not.**
- [x] **service is resbonsible for loggin users out from the system**

- [x] **How you identify and secure user's session (session, jwt).**  

for secure and identify user Session we store it in Database , so when user send request our server can compare between session id from browser and session id stored in our server

- [x] **Datastore you need to use.**  

Database used for this App: Mysql  
there is customer table that store user Data ->username , password , email , balance , privileges  
cart table that store orders customer made -> item , price , owner , details  
sessions table for store sessions  
products table for store products that you offer to sale contain -> id,name,price,pic  

- [x] **how to keep user's session valid.**  

keep user session Valid by add expire date to it  and to keep it at server , as long as customer didn't logout or session didn't expired it's will be valid  

- [x] **way to force invalidating sessions.**   

for invalidating session** i use expire or user can logout and in that case session will destroy using req.session.destroy()  

- [x] **how to strucuture your roles and permissions.**   

**how structure my roles and permissions:**  
Admin: i use for that row at customer table at database called privileges , if privileges row=admin that mean that user not normal customer and can access to all orders details and cancel any order he want.  

customer:he don't have any privileges and privileges row at database is empty.  

- [x] **how to assign specific user a specific role or permission.**  
 
as i mentioned early in app there is normal customer and admin , can set that by database -> customer table -> choose user you want -> update his privileges to admin (not Admin, a not A)  

- [x] **You may build RESTful API to expose the essential functionlities in order for other services to consume your service.**  

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

## how should we get your code working  
**option1:** you can test it at your local server , 
1-by download xampp for example then you need to go to phpmyadmin and create database and import databaseStructure.sql file 
for create all tables and data.  
2-use npm install for download packages from package.json  
3-create file and give it extension only .env , or you can download it directly from repositry and change variables to your mysql connection data:  
```
MYSQL_HOST=localhost
MYSQL_USERNAME=root
MYSQL_PASSWORD=
MYSQL_DATABASE=foodfumes
PORT=3000
SECRET=if really don't know
SIGNATURE=idon'tknowif4*fishequal2
```  
**Note:**better to change SECRET and SIGNATURE , i just keep it for project purpose , also be sure you use same MYSQL enviroment variable names**  
Now it's ready and you can run it using npm run watch or node db.js 
Note(don't forget to keep xampp server running with mysql so our app can access to app)

**Option2:** in case you decided to deploy site online to your hosting:  
1-go to control panel and choose setup Node and follow steps for create Node App  
![set1](https://warfumes.com/pics/set1.jpeg) 
2-you don't need .env file instead you can insert enviroment variable from Node Apps at hosting  
![set2](https://warfumes.com/pics/set2.jpeg) 




- [ ] **Any leftouts? what you may added if you got additional time.** 
there is a lot of leftouts , first i wanted to let customer order all he wanted then go to cart and confirm order so i can wrap everything he ordered in single order , also i wanted to add number show number of items at top navbar similiar to facebook when you get notification , i wanted also to add Support section where customer can open support Ticket in case he face any issue or he wanted to ask something , pagination list for make orders page more clean in case there is many orders.  
- [x] **Tell us about something you learned during the coarse of this task.**  
i learned about API and how to create them so other services can access and use my service  
- [x] **Useful link(s) related to you or the task you may like to share with us.**  
https://castleswar.com/ : online browsing game that i still working on it , where players can exchange messages and recieve reports like (war report) , build armies , move units on map. built using Node
http://fxpropfirms.com/ : service that show firms that offer funding services and data of each firm , built using PHP&Mysql
# Security
1. store session in database for compare it with requests come from user browser.
1. prevent CSRF Attacks using Csurf Tokens.
1. used JWT for secure requests via API
1. used bcryptjs for hash passwords in database
1. used validator for Validate user inputs











