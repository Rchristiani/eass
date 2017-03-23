const express = require('express');
const app = express();
const emojis = require('./data/emojis.js');
const utils = require('./utils');

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-length, Accept');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.get('/emojis', (req,res) => {
	const query = req.query;
	if(query.limit) {
		res.send({
			emojis: utils.limit(query.limit,emojis)
		});
	}
	else {
		res.send({
			emojis
		});
	}
});

app.get('/emojis/random', (req,res) => {
	res.send({
		emoji: utils.random(emojis)
	});
});

app.listen(3000)