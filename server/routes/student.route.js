const express = require('express');
const multer = require('multer');
const path = require('path');
const { postStudentDataController,getStudentDataController, updateStudentDataController, deleteStudentDataController, } = require('../controller/student.controller');


const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});
const upload = multer({ storage });

// Actual POST route
router.post('/add',upload.single('Photo'),postStudentDataController);
router.get('/get',getStudentDataController);
router.post('/update/:id', upload.single('Photo'), updateStudentDataController);
router.delete('/delete/:id',deleteStudentDataController);
module.exports = router;
