const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost',
user :  'root',
password :  'U4e5ydes@',
database :  'wild_circus',
});
module.exports = connection;