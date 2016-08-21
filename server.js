// Dependencies
var express = require('express'),
	https = require('https'),
	rp = require('request-promise'),
	Promise = require('promise');
require('dotenv').config();


// Application variables
var app = express();
var NASA_API_KEY = process.env.NASA_API_KEY;


// Middleware
app.use(express.static('public'));


// Routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/getAstroidData', function(req, res) {
	var shit = init();
	console.log(shit);
	res.send(shit);
});


// Create Server
app.listen(3456, function() {
	console.log('listening on http://localhost:3456');
});

function getAsteroidData() {
	// var asteroidData = new Promise(function(resolve, reject) {
	// 	get('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=NASA_API_KEY', function(err, res) {

	// 		if(err) {
	// 			console.log('error mother fucker');
	// 			reject(err);
	// 		} else {
	// 			console.log('we good');
	// 			resolve(res);
	// 		}
	// 	});
	// });

	// return asteroidData;

	// var asteroidData = https.get('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=NASA_API_KEY', function(res) {
	// 	console.log(res.headers);
	// });

	// return asteroidData;
	var options = {
		uri: 'https://api.nasa.gov/neo/rest/v1/feed/today',
		qs: {
			detailed: true,
			api_key: NASA_API_KEY
		},
		json: false
	}
	return rp(options);
}

var sortAsteroidData = function(asteroidData) {
	date = getDate();
	asteroidData = JSON.parse(asteroidData);
	asteroidData = asteroidData.near_earth_objects[date];

	for(var i = 0; i < asteroidData.length; i++) {
		console.log(asteroidData[i].close_approach_data[0].miss_distance.miles);
	}

	var distances = asteroidData.map(function(asteroid) {
		return asteroid.close_approach_data[0].miss_distance.miles;
	});
	

	var sortedDistances = distances.concat().sort(function(a, b) {
		return parseFloat(a) - parseFloat(b);
	});


	var indexMap = [];
	sortedDistances.forEach(function(distance) {
		for(var i = 0; i < distances.length; i++) {
			if( distances[i] == distance ) {
				indexMap.push(i);
			}
		}
	});

	sortedAsteroidData = [];
	for(var i = 0; i < asteroidData.length; i++) {
		sortedAsteroidData.push( asteroidData[indexMap[i]] );
	}

	console.log('------------');
	for(var i = 0; i < sortedAsteroidData.length; i++) {
		console.log(sortedAsteroidData[i].close_approach_data[0].miss_distance.miles);
	}

	return Promise.resolve(sortedAsteroidData);
}

var getDate = function() {
	var today = new Date();
	var month = today.getMonth() + 1;
	var month = month.toString().split('').length == 1 ? '0' + month : month;
	return today.getFullYear() + '-' + month + '-' + today.getDate();
}

var formatAsteroidData = function(sortedAsteroidData) {
	return formattedAstroidData;
}


var init = function(callback) {
	return getAsteroidData()
		.then(sortAsteroidData)
		// .then(formatAsteroidData)
		.nodeify(callback);
}