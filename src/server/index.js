var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();
app.use(express.static("dist"));

const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

//environment variables for APIkey
const dotenv = require("dotenv");
dotenv.config();

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
  //check whether Environment Variable works
  console.log(
    `Your API key is ${process.env.API_KEY}, delete this before submitting`
  );
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//getApiKey for request
app.get("/getApiKey", function (req, res) {
  const json = { ApiKey: process.env.API_KEY };
  res.send(json);
});

//postData into projectData
let projectData = {};
app.post("/addAnalysis", function (req, res) {
  console.log(req.body);
  (projectData = {
    agreement: req.body.agreement,
    confid: req.body.confid,
    irony: req.body.irony,
    content: req.body.content,
    subjectivity: req.body.subjectivity,
    remainCredits: req.body.remainCredits,
  }),
    console.log("Data post", projectData);
  res.send(projectData);
});

app.get("/all", function (req, res) {
  res.send(projectData);
  console.log("Data sent", projectData);
});
