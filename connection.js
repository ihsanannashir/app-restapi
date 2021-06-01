var mysql = require('mysql');

//connect to mysql database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
});

conn.connect( (err) => {
    if(err) throw err;
    console.log('Mysql connected');
});

module.exports = conn;