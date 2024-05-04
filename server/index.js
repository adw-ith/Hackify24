/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const util = require("util");
const { PythonShell } = require("python-shell");
const runPythonShell = util.promisify(PythonShell.run);

app.use(cors());

app.get("/", (req, res) => {
  res.send(" Hello ");
});

app.get("/run", async (req, res) => {
  try {
    // Define Python script path
    const scriptPath = "./pythoncode/trial.py";

    // Run Python script
    const result = await runPythonShell(scriptPath, null);

    console.log("Python script executed successfully.");
    res.send(result);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send("An error occurred while executing the Python script.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
