const express = require('express');
const app = express();
const emojis = require('./data/emojis.js');

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-length, Accept');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

function random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
} 

app.get('/emojis', (req,res) => {
	res.send({
		emojis
	});
});

app.get('/emojis/random', (req,res) => {
	res.send({
		emoji: random(emojis)
	});
});

app.listen(3000)