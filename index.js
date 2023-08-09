const express=require('express')
const dotenv= require('dotenv').config()
const cors=require('cors')
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('atlas connected'))
.catch((err)=>console.log('database not connected'))
const app=express()

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

app.use('/',require('./Routes/router'))

const port = 8000 

app.listen(port,()=>{
    console.log(`server start at port ${port}`);
})