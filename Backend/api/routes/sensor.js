const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Sensor = require('../models/sensor');


router.get('/', (req, res, next) => {
    Sensor.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })
   
});

router.get('/edgeStation', (req, res, next)=>{
    const edgeStationId = req.query.edgeStationId;
    const machineId = req.query.machineId
    Sensor.find({ edgeStationId: edgeStationId, machineId: machineId  })
        .exec()
        .then(doc => {
        console.log("From database",doc);
        if (doc){
            res.status(200).json(doc);
        }
        else {
            res.status(404).json({message:"not a valid machineId and edgeStationId "});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    })
        
});


router.post('/setupSensor', (req, res, next) => {
    const sensor = new Sensor({
        _id : new mongoose.Types.ObjectId(),
        machineId: req.body.machineId,
        name: req.body.name,
        sensorType:req.body.sensorType,
        desc:req.body.desc,
        department:req.body.department,
        edgeStationId:req.body.edgeStationId,
        provider:req.body.provider,
        status:0
    });
    course
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message: "New sensor Created",
        
    });
});

router.patch("/addSensor", (req, res, next) => {


    const sensorId = req.body.sensorId;
    Sensor.update({ sensorId: sensorId }, { $set: {
        status: 1,
    } })
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

module.exports = router;