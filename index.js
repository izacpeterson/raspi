/** @format */

const express = require("express");
const app = express();
const fs = require("fs");
const os = require("os");

app.use(express.static("public"));

app.get("/api", (req, res) => {
  // let temp = fs.readFileSync("temp.txt");
  // console.log(temp.toString());
  // res.json({"temp":temp.toString()})
  let resInfo = {
    freemem: os.freemem() / 1000000000 + "gb",
    os: os.platform(),
  };
  res.json(resInfo);
  // console.log(os.freemem());
});

app.listen(3000, () => {
  console.log("server listening");
});
