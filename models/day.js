var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');


var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
	number: Sequelize.INTEGER
})


module.exports= Day;
// Day.belongsTo(Hotel)

// Day.belongsToMany(Restaurant, {through: day_restaurant});
// Day.belongsToMany(Activity, {through: day_activity});



