const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const EdgeStation = require('../models/edgestation');

router.get('/', (req, res) => {
	EdgeStation.find()
		.exec()
		.then(docs => {
			console.log(docs);
			res.status(200).json(docs);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			})
		})
	
});

router.get('/email', (req, res) => {
	const email = req.query.email;
	EdgeStation.find({userEmail: email})
		.exec()
		.then(doc => {
			console.log("From database", doc);
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json({message: "not a valid Email ID"});
			}
			
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		})
});

router.post('/', (req, res) => {
	const edgeStation = new EdgeStation({
		_id: new mongoose.Types.ObjectId(),
		edgeStationId: req.body.edgeStationId,
		name: req.body.name,
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		city: req.body.city,
		country: req.body.country,
		address: req.body.address,
		userEmail: req.body.userEmail
	});
	edgeStation
		.save()
		.then(result => {
			console.log(result);
		})
		.catch(err => console.log(err));
	res.status(201).json({
		message: "New Edge Station Created",
	});
});

module.exports = router;