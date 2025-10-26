const express = require('express');
const cors = require('cors');
const databaseConnection = require('./database');
const studentRoute = require('./routes/student.route');
const app = express();
const port = 3000;

// Connect DB
databaseConnection();

// Middleware
app.use(express.json());
app.use(cors()); // <-- 2. USE CORS MIDDLEWARE HERE

// Default route (for test)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/uploads', express.static('uploads'));

// Mount student routes
app.use('/student', studentRoute);

app.listen(port, () => {
  console.log(`✅ Server running on: http://localhost:${port}`);
});
