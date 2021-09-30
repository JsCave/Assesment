const dotenv=require("dotenv");
dotenv.config();
const mysql=require("mysql");


var pool  = mysql.createPool({
  connectionLimit : 30,
  host            : process.env.MYSQL_HOST,
  user            : process.env.MYSQL_USERNAME,
  password        : process.env.MYSQL_PASSWORD,
  database        : process.env.MYSQL_DATABASE
});

pool.getConnection(function(err, connection) {
  if (err) throw err; // not connected!
  const app=require("./app")
  app.listen(3000)
  connection.release();
});


module.exports=pool