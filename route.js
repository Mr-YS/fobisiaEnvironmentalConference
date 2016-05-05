'use strict';

var express = require('express');

var router = express.Router();

router.get('/',function(req,res) {
	res.render('pages/index');
});

router.get('/coral',function(req,res) {
	res.render('pages/coral');
});

module.exports = router;
