const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require("./config/db")

const authRoutes = require("./Routes/authRoutes")

const app = express()
app.use(cors())
app.use(express.json())
connectDB();

app.use("/api/auth",authRoutes)

app.listen(3004,()=>{
    console.log("server running on port 3004")
})
