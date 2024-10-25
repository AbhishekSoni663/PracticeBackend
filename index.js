const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const config = require("dotenv")
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body);
  if (!email && !pass) {
    res.status(404).send("Please provide email and password" + req.body);
  } else {
    res.send("Login Success!" + req.body);
  }
});

const auth = (req, res, next) => {
  if (req.headers.authorization === "Abhishek Soni") {
    next();
  }else{
    res.send("Invalid User")
  }
};

app.get("/getName", auth, (req, res) => {
console.log(req.headers.authorization,req.query)
  res.send({
    name:"Abhishek Soni",
  });
});


app.post('/createUser',(req,res)=>{
  const {email , pass} = req.body
  console.log(req.body)
    if (!email && !pass) {
      res.status(404).send("Please provide email and password" + req.body);
    } else {
      res.send("User With Email" + email + req.body);
    }
})
app.listen(3500, () => {
    console.log("Server is Running at 3500")
});
