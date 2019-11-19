const router = express.Router();
var multer = require('multer');
const path = require("path");
var Gallery = require('express-photo-gallery');

var options = {
  title: 'My Awesome Photo Gallery'
};

router.use('/image', Gallery('../../../Backend', options));




const storage = multer.diskStorage({
  destination: "",
  filename: function (req, file, cb) {
      cb(null, "DRONE" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 999999999999999999999999},
}).single("myImage");


router.post('/nodedrone', (req, res, next) => {
  upload(req, res, (err) => {

      console.log("Request ---", req.body);
      console.log("Request file ---", JSON.stringify(req.file));  //Here you get file.
      // var filepath = req.file;
      // var filepath = filepath.filename;
      res.status(200).json({
        "message":"done"
    });
      

  });
 
});