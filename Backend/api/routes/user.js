const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Profile = require('../models/profile');
var jwt = require('jsonwebtoken');
//var crypto = require('crypto');


router.get('/', (req, res, next) => {
	User.find()
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


router.post('/register', (req, res, next) => {
	console.log("request", req.body)
	// const cipher = crypto.createCipher('aes-256-ecb', 'password');
	// const mystr = cipher.update(req.body.password, 'utf8', 'hex') + cipher.final('hex');
	
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		email: req.body.email,
		name: req.body.name,
<<<<<<< HEAD
		password: req.body.password,
		role: req.body.role,
		edgeStationId: req.body.edgeStationId
=======
		password: mystr,
		role: req.body.role
>>>>>>> 515efd6f5ee093952637dc677e0fcc978e7caa86
	});
	user
		.save()
		.then(result => {
			console.log(result);
		})
		.catch(err => console.log(err));
	
	res.status(200).json({message: "User Created"});
});


router.get('/:userId', (req, res, next) => {
	const email = req.params.userId;
	User.findOne({email: email})
		.exec()
		.then(doc => {
			console.log("From database", doc);
			if (doc) {
				res.status(200).json(doc);
			} else {
				res.status(404).json({message: "not a valid ID"});
			}
			
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		})
});

module.exports = router;