require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')

//get the clien
const mysql = require('mysql2')

console.log("check env: ", process.env)
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template egine
configViewEngine(app);

//khai báo route
app.use('/', webRouters)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hml'
})

//simple query
connection.query(
    'SELECT * from Users u ',
    function (err, results, fields) {
        console.log(">>>>results= ", results);
        console.log(">>>fields= ", fields);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
