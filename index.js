/** @format */

const express = require("express");
const app = express();
const fs = require("fs");
const os = require("os");
const { exec } = require('child_process')

exec("tree", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});

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
app.get('/console',(req,res)=>{
  exec(req.query.comm, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    res.send(`stdout: ${stdout}`);
  });
})

app.listen(3000, () => {
  console.log("server listening");
});
