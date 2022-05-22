const express = require("express");
const mongoose= require("mongoose")
const dotenv = require("dotenv")
const postRoute = require('./Routes/Post')
const cors= require("cors")


dotenv.config()
const app= express()
app.use(express.json())
app.use(cors())

app.use(`/api`,postRoute)



mongoose.connect(process.env.MONGO_URL ,
    ()=>{
        console.log("Mongodb is connected");
    })

app.get('/he',(req,res)=>{
    console.log('hellow reached')
    res.send("Task added")  
})

app.listen(5001,()=>{console.log("server start !!!")})