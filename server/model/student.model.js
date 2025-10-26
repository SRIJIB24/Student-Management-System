const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  Name:{
    type:String,
    required : true
  },
  Email:{
    type:String,
    required : true
  },
  Phone:{
    type:String,
    required : true
  },
  date:{
    type:Date,
    required : true
  },
  Class:{
    type:String,
    required : true
  },
  Photo: {
    type: String, // will store the filename (e.g., "172820913091-photo.jpg")
    required: false
  },
});

const StudentManagement = mongoose.model('StudentManagement', studentSchema);
module.exports = {StudentManagement};