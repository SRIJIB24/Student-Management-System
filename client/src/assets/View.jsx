import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/student/get`)
      .then((res) => res.json())
      .then((data) => setStudent(data.data.find((item) => item._id === id)))
      .catch((err) => console.error(err));
  }, [id]);

  if (!student) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">Student Profile</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={`http://localhost:3000/uploads/${student.Photo}`}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          />
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{student.Name}</h2>
            <p className="text-gray-600">📧 {student.Email}</p>
            <p className="text-gray-600">📞 {student.Phone}</p>
            <p className="text-gray-600">🎓 {student.Class}</p>
            <p className="text-gray-600">🎂 {student.date}</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              ⬅ Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
