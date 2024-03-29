'use strict';

var express = require('express');
var controller = require('./release.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.select);

module.exports = router;