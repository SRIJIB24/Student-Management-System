import { useState, useEffect } from "react";
import { StudentCard } from "./StudentCard";

const StudentCardContainer = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://student-management-system-tdtf.onrender.com/student/get")
      .then((res) => res.json())
      .then((resData) => {
        setStudents(resData.data)
        setLoading(false);
      })
      .catch((err) =>{
        console.error(err)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading students...</p>;
  }

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
