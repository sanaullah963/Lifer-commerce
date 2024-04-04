const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const product = require('./router/product')
require('dotenv').config()



const app = express()
app.use(cors())
app.use(express.json())
app.use('/product',product)


const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
  console.log('server is running in port :',PORT);
})
app.get('/',(req,res)=>{
  res.send('Astag firullah')
})

// connect mongoDb
async function connect(){
  try {
   await mongoose.connect(process.env.MONGODB_URI)
      console.log('DB connected sucessfully');
    
  } catch (error) {
    console.log('DB connection error');
  }
}
connect()
