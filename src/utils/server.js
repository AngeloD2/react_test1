import express from "express";
import { exec } from "child_process";
import cors from 'cors'
const app = express();

app.use(cors())

app.get("/open-file", (req, res) => {
  const filePath = req.query.filePath;
  exec(`code ${filePath}`, (error) => {
    if (error) {
      console.error(`Error opening file: ${error}`);
      res.status(500).send("Error opening file");
    } else {
      res.send("File opened successfully");
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
