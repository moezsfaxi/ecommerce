const mongoose =require('mongoose');
const bodyParser = require('body-parser')
const express = require('express');
const route= require("./routes/routing")
const cors = require('cors')
const app =express();
const port =4000

app.use(cors({credentials: true, origin: '*'}))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose.connect('mongodb://127.0.0.1/gallery')
.then(()=>console.log('it is working')) 
.catch((err)=>console.log('this is'+err))

app.use(bodyParser.json())
app.use(route)
app.use(express.json());




app.listen(port,err =>{
  
    console.log("listening on port",port)
})




























