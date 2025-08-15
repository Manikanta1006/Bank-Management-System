const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require("./config/db")

const authRoutes = require("./Routes/authRoutes")
const AccountRoutes = require("./Routes/AccountRoutes")
const uploadRoutes = require("./Routes/fileupload.Routes")
const UserwithAccountRoutes = require("./Routes/User.Routes")
const app = express()
app.use(cors())
app.use(express.json())
connectDB();

app.use("/api/auth",authRoutes)
app.use("/api/account",AccountRoutes)
app.use("/api/uploads",uploadRoutes)
app.use("/uploads",express.static("uploads"))
app.use("/api/userwithaccount",UserwithAccountRoutes)


app.listen(3004,()=>{
    console.log("server running on port 3004")
})
