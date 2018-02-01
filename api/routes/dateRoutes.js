'use strict';
module.exports = function(app) {
  var date = require('../controllers/dateController');

  // todoList Routes
  app.route('/dates')
    .post(date.post_date)
    .get(date.list_all_dates);
};