let mysql = require('mysql2');

let connection = mysql.createConnection({
   host: 'sql.freedb.tech',
    user: 'freedb_AmazingAsim',
    password: '2yvUB!Rg37cTqP&',
    database: 'freedb_hotelmanagement',
    port:'3306'
});

connection.connect(function(err) {
  if (err) { throw err };
  connection.query('show databases',function(err,res){
    if(err){throw new Error('wrong query')}
    console.log(res)
  })
});


