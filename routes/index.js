var express = require('express');
var router = express.Router();
const admin = require('../admin');

/* GET home page. */
router.get('/', function (req, res, next) {
    // Get a database reference to our blog
    var db = admin.database();
    var ref = db.ref("merchants/merchant1/2012-11-05");
    //var usersRef = ref.child("data");
    try {
        ref.push({
                orderId: 4,
                item: "Chinese",
                price: "11.99"
            }
        );
    } catch (err) {
        console.log('something went wrong with our firebase')
    }

    res.render('index', {title: 'Express'});
});

module.exports = router;
