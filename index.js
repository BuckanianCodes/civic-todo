const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv  = require('dotenv')
const todoRouter = require('./routers/todo.router')

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
mongoose.connection
        .once('open',()=>console.log("Connected to database"))
        .on('error',(e) =>console.log(e));

app.use("/api",todoRouter)
app.use("/health",(req,res) => {res.send("API is working okay")})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port:8080")
 })
