const moment = require("moment");
const express = require("express");
const path = require("path");
const app = express();
const Year = require("./assets/js/year.json");

app.use(express.static("assets"));
app.use(express.static(path.join(__dirname, "assets")));
console.log(moment().format("dddd"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/calendar", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/calendar.html"));
});

app.post("/credentials", function (req, res) {
  res.sendFile(path.join(__dirname, "/assets/pages/creds.html"));
});
////////////////////////////////
app.listen(3001, function () {
  console.log("Listening");
});
