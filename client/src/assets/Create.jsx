import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Class: "",
    date: "",
  });

  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const resetForm = () => {
    setFormData({
      Name: "",
      Email: "",
      Phone: "",
      Class: "",
      date: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const url = "http://localhost:3000/student/add";
    const form = new FormData();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("date", formData.date);
    form.append("Class", formData.Class);
    if (formData.Photo) form.append("Photo", formData.Photo);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      if (result.success) {
        alert(result.message);
        resetForm();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        alert("Operation failed: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Add Student Data
        </h1>

        {/* The form with responsive width, padding, and styling */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
        >
          {/* Grid layout for form fields, responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Name"
              >
                Name:
              </label>
              <input
                type="text"
                id="Name"
                value={formData.Name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                placeholder="Enter Student name"
                required
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Email"
              >
                Email:
              </label>
              <input
                type="email"
                id="Email"
                value={formData.Email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                placeholder="Enter Student Email"
                required
              />
            </div>
            {/* Phone Input */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Phone"
              >
                Phone:
              </label>
              <input
                type="tel"
                id="Phone"
                value={formData.Phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            {/* Date of Birth Input */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="date"
              >
                Date of Birth:
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                required
              />
            </div>
            {/* Class Input */}
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Class"
              >
                Class:
              </label>
              <input
                type="text"
                id="Class"
                value={formData.Class}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                placeholder="e.g., Grade 10, Section B"
                required
              />
            </div>
            {/* Photo Upload */}
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Photo"
              >
                Photo:
              </label>
              <input
                type="file"
                id="Photo"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, Photo: e.target.files[0] })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Student Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
