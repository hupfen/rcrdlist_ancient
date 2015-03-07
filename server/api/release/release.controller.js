'use strict';

var _ = require('lodash');
var sugar = require('sugar');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rcrdlist.db');

// Get list of releases
exports.index = function(req, res) {
  db.all('select * from release', function(err, rows) {
    res.json(rows);
  });
};

// Get specific release
exports.select = function(req, res) {
  var result;
  db.get('select * from release where id = $id', {$id: req.params.releaseId}, function(err, row) {
    result = row;
  });
  
  res.json(result);
};