'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DateSchema = new Schema({
  date: {
    type: String
  }
});

module.exports = mongoose.model('Dates', DateSchema);