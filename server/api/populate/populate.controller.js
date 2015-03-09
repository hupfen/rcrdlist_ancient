'use strict';

var _ = require('lodash');
var sugar = require('sugar');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('rcrdlist.db');
var MailChimpAPI = require('mailchimp').MailChimpAPI;

// Get list of populates
exports.index = function(req, res) {
  /*db.serialize(function() {
    //db.run('DROP TABLE release');

    db.run("CREATE TABLE release (id INTEGER PRIMARY KEY, artist TEXT NOT NULL, album TEXT NOT NULL, date TEXT NOT NULL, artwork BLOB NOT NULL, summary BLOB, genre TEXT NOT NULL, bandcamp BLOB, spotify BLOB, jamendo BLOB, soundcloud BLOB, amazon BLOB, itunes BLOB, gplay BLOB, twitter BLOB, facebook BLOB, youtube BLOB, gplus BLOB, scSocial BLOB, picker TEXT NOT NULL, bcID INTEGER, scID INTEGER, jmID INTEGER)");
  });*/
  var result;
  db.all('select * from release', function(err, rows) {
    res.json(rows);
  });
};

exports.insert = function(req, res) {
  var p = req.body;
  var artwork;
  
  if (new Date(p.date) < new Date()) {
    artwork = 'https://s3-us-west-2.amazonaws.com/rcrdlist/' + p.artist.toLowerCase().replace(/\s+/g, '').replace(/&/g, 'and').replace(/[\.,-\/#!$%\^\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '') + '.jpg';
  }
  else {
    // mailchimp/social stuffs
  }
  
  db.run('insert into release (artist, album, date, artwork, summary, genre, bandcamp, spotify, jamendo, soundcloud, amazon, itunes, gplay, twitter, facebook, youtube, gplus, scSocial, picker, bcID, scID, jmID, spotFollow) values ($artist, $album, $date, $artwork, $summary, $genre, $bandcamp, $spotify, $jamendo, $soundcloud, $amazon, $itunes, $gplay, $twitter, $facebook, $youtube, $gplus, $scSocial, $picker, $bcID, $scID, $jmID, $spotFollow)', 
         {
    $artist: p.artist, $album: p.album, $date: p.date, $artwork: artwork, $summary: p.summary || null, $genre: p.genre, $bandcamp: p.bandcamp || null, $spotify: p.spotify || null, $jamendo: p.jamendo || null, $soundcloud: p.soundcloud || null, $amazon: p.amazon || null, $itunes: p.itunes || null, $gplay: p.gplay || null, $twitter: p.twitter || null, $facebook: p.facebook || null, $youtube: p.youtube || null, $gplus: p.gplus || null, $scSocial: p.scSocial || null, $picker: p.picker, $bcID: p.bcID || null, $scID: p.scID || null, $jmID: p.jmID || null, $spotFollow: p.spID || null
        }, function(err) {
         res.json(this.lastID);
         });
};

exports.update = function(req, res) {
  var p = req.params;
  db.run('insert into release (artist, album, date, artwork, summary, genre, bandcamp, spotify, jamendo, soundcloud, amazon, itunes, gplay, twitter, facebook, youtube, gplus, scSocial, picker, bcID, scID, jmID, spotFollow) values ($artist, $album, $date, $artwork, $summary, $genre, $bandcamp, $spotify, $jamendo, $soundcloud, $amazon, $itunes, $gplay, $twitter, $facebook, $youtube, $gplus, $scSocial, $picker, $bcID, $scID, $jmID, $spotFollow)', 
         {
    $artist: p.artist, $album: p.album, $summary: p.summary || null, $genre: p.genre, $bandcamp: p.bandcamp || null, $spotify: p.spotify || null, $jamendo: p.jamendo || null, $soundcloud: p.soundcloud || null, $amazon: p.amazon || null, $itunes: p.itunes || null, $gplay: p.gplay || null, $twitter: p.twitter || null, $facebook: p.facebook || null, $youtube: p.youtube || null, $gplus: p.gplus || null, $scSocial: p.scSocial || null, $picker: p.picker, $bcID: p.bcID || null, $scID: p.scID || null, $jmID: p.jmID || null, $spotFollow: p.spID || null
        }, function(err) {
         res.json(this.lastID);
         });
};