import { useState, useEffect } from "react";
import { StudentCard } from "./StudentCard";

const StudentCardContainer = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://student-management-system-tdtf.onrender.com/student/get")
      .then((res) => res.json())
      .then((resData) => setStudents(resData.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {students.length > 0 ? (
        students.map((student) => (
          <StudentCard
            key={student._id}
            Photo={student.Photo}
            Name={student.Name}
            Email={student.Email}
            Phone={student.Phone}
            date_of_Birth={student.date}
            Class={student.Class}
            id={student._id}
          />
        ))
      ) : (
        <p className="text-gray-500 mt-8 text-center text-lg">
          No students found.
        </p>
      )}
    </div>
  );
};

export default StudentCardContainer;
