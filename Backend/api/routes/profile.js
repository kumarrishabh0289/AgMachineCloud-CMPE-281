const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/profile');
const ServiceRequest = require('../models/servicerequest');
const User = require('../models/user');
var multer = require('multer');
const path = require("path");
const Sensor = require('../models/sensor');

const Machine = require('../models/machine');
router.get('/', (req, res, next) => {
    Profile.find()
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

router.get('/bill', (req, res, next)=>{
    const email = req.query.email;
    var t
    var t2
	ServiceRequest.find({email: email})
		.exec()
		.then(doc => {
			console.log("From database", doc);
			if (doc) {
                t = doc
                Machine.find({email: email})
                .exec()
                .then(docs => {
                    console.log(docs);
                    t2 = t.concat(docs);
                    Sensor.find({email: email})
                    .exec()
                    .then(docs => {
                        console.log(docs);
                        res.status(200).json(t2.concat(docs));
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    })

                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                })
			} else {
				res.status(404).json({message: "not a valid machineId"});
			}
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
        
      
});



router.get('/email', (req, res, next)=>{
    const email = req.query.email;
    Profile.findOne({ email: email })
        .exec()
        .then(doc => {
        console.log("From database",doc);
        if (doc){
            res.status(200).json(doc);
        }
        else {
            res.status(404).json({message:"not A valid Email ID"+email+"hi"});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    })
        
});

router.patch("/", (req, res, next) => {
    
    
    
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    const email = updateOps.email;
    console.log("updateOps",updateOps);
    console.log("email",email);
    Profile.update({email : email}, { $set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message:"Update Was Successfull"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});



const storage = multer.diskStorage({
    destination: "../frontend/public/uploads",
    filename: function (req, file, cb) {
        cb(null, "CANVAS" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 999999999999999999999999},
}).single("myImage");


router.post('/imgupload', (req, res, next) => {
    upload(req, res, (err) => {

        console.log("Request ---", req.body);
        console.log("Request file ---", JSON.stringify(req.file));  //Here you get file.
        var filepath = req.file;
        var filepath = filepath.filename;
        var email = req.body.email;

        Profile.update({email : email}, { $set: {image : filepath}})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message:filepath
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
       


    });
   
});


module.exports = router;