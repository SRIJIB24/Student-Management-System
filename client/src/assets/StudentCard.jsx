import React from "react";
import { Link } from "react-router-dom";

export const StudentCard = ({
  id,
  Name,
  Email,
  Phone,
  date_of_Birth,
  Class,
  Photo,
}) => {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${Name}?`)) {
      try {
        const res = await fetch(
          `https://student-management-system-tdtf.onrender.com/student/delete/${id}`,
          { method: "DELETE" }
        );
        const data = await res.json();
        if (data.success) {
          alert("✅ Student deleted successfully!");
          window.location.reload();
        } else {
          alert("❌ Delete failed!");
        }
      } catch (error) {
        console.error(error);
        alert("Server error during delete.");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 p-6 w-full max-w-sm text-center">
      <img
        src={`https://student-management-system-tdtf.onrender.com/uploads/${Photo}`}
        alt={Name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-600"
      />
      <h1 className="text-xl font-bold text-gray-800 mt-4">{Name}</h1>
      <p className="text-gray-600">{Email}</p>
      <p className="text-gray-600">{Phone}</p>
      <p>
        Date of Birth:{" "}
        {new Date(date_of_Birth).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      <h2 className="text-lg font-semibold text-green-800 my-2">{Class}</h2>

      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        <Link
          to={`/view/${id}`}
          className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-lg hover:bg-green-200 transition"
        >
          View
        </Link>
        <Link
          to={`/update/${id}`}
          className="bg-yellow-100 text-yellow-800 font-bold py-2 px-4 rounded-lg hover:bg-yellow-200 transition"
        >
          Update
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-100 text-red-800 font-bold py-2 px-4 rounded-lg hover:bg-red-200 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
