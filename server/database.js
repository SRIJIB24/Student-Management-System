const mongoose = require("mongoose");

const databaseConnection = async () => {
  mongoose
    .connect("mongodb+srv://srijib24:srijib2002@cluster0.htfi16h.mongodb.net/")
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log("Database Connection Failed");
    });
};
module.exports = databaseConnection;
