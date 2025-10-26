🎓 Student Management System

A modern, responsive web application to manage student records effortlessly. Add, view, update, and delete student data, including photos. Built with React for the frontend and Node.js + Express for the backend.

🌟 Features

✅ Add new students with name, email, phone, class, date, and photo.

✅ View all students in a responsive card layout.

✅ Update student information seamlessly.

✅ Delete student records securely.

✅ File upload support with multer.

✅ Clean, RESTful API for backend management.

| Frontend             | Backend           | Database        | File Upload |
| -------------------- | ----------------- | --------------- | ----------- |
| React + Tailwind CSS | Node.js + Express | MongoDB         | Multer      |


💻 Installation

1️⃣ Clone the repository git clone https://github.com/SRIJIB24/student-management-system.git cd student-management-system

2️⃣ Backend setup cd backend npm install npm run start # or npm run dev if using nodemon

3️⃣ Frontend setup cd ../frontend npm install npm start

🔗 API Endpoints Method Endpoint Description GET /student/get Get all students POST /student/add Add a new student PUT /student/update/:id Update student by ID DELETE /student/delete/:id Delete student by ID
