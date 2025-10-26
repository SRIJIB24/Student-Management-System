import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    date: "",
    Class: "",
    Photo: null,
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/student/get`)
      .then((res) => res.json())
      .then((data) => {
        const student = data.data.find((item) => item._id === id);
        if (student){
          setFormData({
            Name: student.Name,
            Email: student.Email,
            Phone: student.Phone,
            date: student.date,
            Class: student.Class,
            Photo: null, // photo not fetched as File
          });
          setPreview(`http://localhost:3000/uploads/${student.Photo}`);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, Photo: file }));
    setPreview(URL.createObjectURL(file)); // instant preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("date", formData.date);
    form.append("Class", formData.Class);
    if (formData.Photo) form.append("Photo", formData.Photo)
    try{
    const res = await fetch(`http://localhost:3000/student/update/${id}`, {
      method: "POST",
      body: form,
    });
    
    const data = await res.json();
    if (data.success) {
      alert("✅ Student updated successfully!");
      navigate("/");
    } else {
      alert("❌ Failed to update student.");
    }
    }
    catch (error) {
      console.error("Error updating student:", error);
      alert("Server error during update.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Update Student Data
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
        >
          {["Name", "Email", "Phone", "date", "Class"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-gray-700 font-semibold mb-2"
              >
                {field}:
              </label>
              <input
                type={field === "date" ? "date" : "text"}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}
          {/* Photo Upload + Preview */}
          <div>
            <label
              htmlFor="Photo"
              className="block text-gray-700 font-semibold mb-2"
            >
              Upload New Photo (optional):
            </label>
            <input
              type="file"
              id="Photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-full mt-3"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700"
          >
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
