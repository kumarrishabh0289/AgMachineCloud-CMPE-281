const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Machine = require('../models/machine');
const Sensor = require('../models/sensor');

router.get('/', (req, res) => {
	Machine.find()
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

router.patch("/update", (req, res) => {
	const id = req.body.machineId;
	Machine.update({machineId: id}, {
			$set: {
				machineStatus: parseInt(req.body.machineStatus),
			}
		})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: "Service Request status was updated Successfully" 
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.get('/edgeStationId', (req, res) => {
	const edgeStationId = req.query.edgeStationId;
	Machine.find({edgeStationId: edgeStationId})
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

router.post('/setupMachine', (req, res) => {
	Machine.findOne().sort({machineId: 'desc', _id: -1}).limit(1)
		.exec()
		.then(docs => {
			console.log(docs);
			let machineId = 1;
			if (docs) {
				machineId = docs.machineId + 1;
			}
			let img = req.body.machineType +".jpg"
			const machine = new Machine({
				_id: new mongoose.Types.ObjectId(),
				machineId: machineId,
				name: req.body.name,
				machineType: req.body.machineType,
				desc: req.body.desc,
				edgeStationId: req.body.edgeStationId,
				provider: req.body.provider,
				machineStatus: 0,
				image:img,
				email: req.body.email
			});
			machine
				.save()
				.then(result => {
					console.log(result);
				})
				.catch(err => console.log(err));
			res.status(200).json({
				message: "New Machine Created",
			});
		})
});

router.patch("/addSensor", (req, res, next) => {
	const sensorId = req.body.sensorId;
	Sensor.update({sensorId: sensorId}, {
			$set: {
				status: 1,
			}
		})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: "Sensor Was added Successfully"
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.patch("/deleteSensor", (req, res, next) => {
	const sensorId = req.body.sensorId;
	Sensor.update({sensorId: sensorId}, {
			$set: {
				status: 0,
			}
		})
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: "Sensor Was deleted Successfully"
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router;