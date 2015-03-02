'use strict';

var express = require('express');
var controller = require('./populate.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.insert);
router.put('/', controller.update);

module.exports = router;