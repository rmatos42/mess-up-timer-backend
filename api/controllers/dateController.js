'use strict';


var mongoose = require('mongoose'),
  Dates = mongoose.model('Dates');

exports.list_all_dates = function(req, res) {
  Dates.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  }).sort({_id: -1});
};




exports.post_date = function(req, res) {
  var new_date = new Dates(req.body);
  new_date.save(function(err, dates) {
    if (err)
      res.send(err);
    res.json(dates);
  });
};