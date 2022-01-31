const express = require("express");
const Students = require("./models");

const app = express();

app.use(express.json());

app.get("/students", (req, res) => {
  Students.findAll().then((students) => res.send(students));
});

app.post("/students", (req, res) => {
  Students.create(req.body).then((newStudent) =>
    res.status(201).send(newStudent)
  );
});

app.listen(3000);

module.exports = app;
