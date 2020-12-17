const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config()

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: process.env.MYSQL_USER || "hajt0juboxqg4zeb",
    password: process.env.MYSQL_PASSWORD || "r7ba7egyzv7nxwli",
    database: process.env.MYSQL_DATABASE || "t9vvu4ji2l9rzfgy",
    insecureAuth: true
  })

module.exports = pool


    

