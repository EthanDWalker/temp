const express = require("express");
const app = express();
const people = require('./routes/people')

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json())

app.use('/api/people', people)

app.listen(5000, () => {
  console.log("listen on 5000");
});
