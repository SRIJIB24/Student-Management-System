const { StudentManagement } = require('../model/student.model');

// ✅ CREATE (with photo upload)
const postStudentDataController = async (req, res) => {
  try {
    const { Name, Email, Phone, date, Class } = req.body;
    const Photo = req.file ? req.file.filename : null; // Get uploaded file name

    // Validation
    if (!Name || !Email || !Phone || !date || !Class) {
      return res.status(400).json({
        message: "Please provide all required fields",
        success: false
      });
    }

    const studentAdd = await StudentManagement.create({
      Name,
      Email,
      Phone,
      date,
      Class,
      Photo
    });

    return res.status(201).json({
      message: "Student added successfully",
      success: true,
      data: studentAdd
    });
  } catch (err) {
    console.error("❌ Error in postStudentDataController:", err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};

// ✅ READ
const getStudentDataController = async (req, res) => {
  try {
    const studentData = await StudentManagement.find({});
    return res.status(200).json({
      message: "Student Data Fetched Successfully",
      success: true,
      data: studentData
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};

// ✅ UPDATE (with optional photo update)
const updateStudentDataController = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // If a new photo is uploaded, include it
    if (req.file) {
      updates.Photo = req.file.filename;
    }

    const updatedStudent = await StudentManagement.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
        success: false
      });
    }

    return res.status(200).json({
      message: "Student updated successfully",
      success: true,
      data: updatedStudent
    });
  } catch (error) {
    console.error("❌ Error in updateStudentDataController:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};

// ✅ DELETE
const deleteStudentDataController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await StudentManagement.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found",
        success: false
      });
    }

    return res.status(200).json({
      message: "Student deleted successfully",
      success: true
    });
  } catch (error) {
    console.error("❌ Error in deleteStudentDataController:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
};

module.exports = {
  postStudentDataController,
  getStudentDataController,
  updateStudentDataController,
  deleteStudentDataController
};
