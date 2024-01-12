const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

require("dotenv").config()

// Create App
const app = express();

// MiddleWare
app.use(cors())
app.use(express.json())

// Routes


// conection with mongoose
// mongoose.connect(process.env.CONNECTION_STRING ,{

// })

app.get("/", (req, res) => {
    res.send("Hello Word nauman")
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


