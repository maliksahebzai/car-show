var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
router.post('/create', function(req, res, next) {
    
      var Name     = req.body.name;
      var companey = req.body.companey;
      var price        = req.body.price;
      var email     = req.body.email;
        var phone = req.body.phone;
        var pic = req.body.pic;
    
      
     var sqli = `INSERT INTO car (carname,company,price,email,phone,pic ) VALUES ('${Name}', '${companey}', '${price}','${email}','${phone}', '${pic}' )`;
     db.query(sqli,function (err, data) {
        if (err) throw err;
             console.log("record inserted");
         });
     res.redirect('/users/form');
});

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
    var sql='SELECT * FROM car';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});
module.exports = router;