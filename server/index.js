const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config


const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
  console.log('server is running in port :',PORT);
})
app.get('/',(req,res)=>{
  res.send('Astag firullah')
})

