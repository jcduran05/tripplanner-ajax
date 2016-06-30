var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Place = require('../../models/place');
var Day = require('../../models/day');
var Promise = require('bluebird');
module.exports = router;


//going to create data here and sending to database
//our server (middleman) talking to our database-adding to it, creating it, retrieving data from it 
router.get('/days', function(req, res, next) {
	Day.findAll({}).then(function(days){
		res.json(days)
	})
 	.catch(next)
  });


router.get('/days/:id', function(req, res, next) {

 	
  });


router.post('/days', function(req, res, next) {
	// //var day = Day.build({
	// 	number: req.body.number
	// 	});
 		Day.create(req.body).then(function(day){
 			res.json(day);
 		})
  		.catch(next); 
  });


router.post('/days/:id/hotel', function(req, res, next) {

 	
  });

router.post('/days/:id/restaurants', function(req, res, next) {

 	
  });

router.post('/days/:id/activities', function(req, res, next) {

 	
  });




router.put('/days/:id/hotel', function(req, res, next) {

 	
  });

router.put('/days/:id/restaurants', function(req, res, next) {

 	
  });


router.put('/days/:id/activities', function(req, res, next) {

 	
  });

router.delete('/days/:number', function (req, res, next){
	Day.destroy({
		where: {
			number: req.params.number
		}
	})
	.then(function(data){
		res.json(data)

	})
	.catch(next)

});



