const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const filePath = "./backend/database.csv";
// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  // Writing data to the text file
  fs.appendFile(filePath, "", (err) => {
    if (err) {
      console.error("Error clearing file:", err);
    } else {
      //   newData.forEach((record) => {
      const { name, email, groupType } = req.body;
      const line = `${name},${email}, ${groupType}\n`;
      fs.appendFile(filePath, line, (err) => {
        if (err) {
          console.error("Error appending to file:", err);
        } else {
          console.log("Data appended to file successfully.");
        }
      });
      //   });
    }
  });
  return res.status(200).json({ status: "success" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
