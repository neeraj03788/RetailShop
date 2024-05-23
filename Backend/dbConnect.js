const mongoose = require('mongoose')

const URL ='mongodb+srv://ritu6713:Rajesh2001@cluster0.znmrnnt.mongodb.net/my-garage?retryWrites=true&w=majority'
mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});