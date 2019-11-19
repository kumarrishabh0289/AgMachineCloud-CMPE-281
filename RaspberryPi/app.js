var express = require('express');
var app = express();
var http = require('http');
var NodeWebcam = require( "node-webcam" );
var fs    = require("fs")
var request = require('request')





app.get('/', function(req, res) {
    console.log('Taking Image Now',Date());
    var opts = {
 
        //Picture related
     
        width: 1280,
     
        height: 720,
     
        quality: 100,
     
     
        //Delay in seconds to take shot
        //if the platform supports miliseconds
        //use a float (0.1)
        //Currently only on windows
     
        delay: 0,
     
     
        //Save shots in memory
     
        saveShots: true,
     
     
        // [jpeg, png] support varies
        // Webcam.OutputTypes
     
        output: "jpeg",
     
     
        //Which camera to use
        //Use Webcam.list() for results
        //false for default device
     
        device: false,
     
     
        // [location, buffer, base64]
        // Webcam.CallbackReturnTypes
     
        callbackReturn: "location",
     
     
        //Logging
     
        verbose: false
     
    };
     
     
    //Creates webcam instance
     
    var Webcam = NodeWebcam.create( opts );
     
     
    //Will automatically append location output type
    
     
    Webcam.capture( "test_picture", function( err, data ) {
      console.log("taken the picture")
    } );

    
     
   
     
    var req = request.post('http://ec2-18-217-254-66.us-east-2.compute.amazonaws.com:3000/nodedrone', function (err, resp, body) {
      if (err) {
        console.log('Error!',err);
      } else {
        console.log('body: ' + body);
      }
    });
    var form = req.form();
    form.append('myImage', fs.createReadStream('test_picture.jpg'))

    res.writeHead(200,{
      'Content-Type' : 'text/plain'
  })
  
  res.end("Image Taken and sent at ",Date());
  });


// Listen
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on localhost:'+ port);