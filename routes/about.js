/**
 * Created by Vietpn on 9/18/2015.
 */
var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About',
        name: 'Bucky'
    });
});

module.exports = router;
