const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const todoRouter = require("./routes/todoRouter");
const app = express();
const port = process.env.PORT || 5000;

//middle ware
env.config();
app.use(express.json());
app.use(cors());


//todo route
app.use("/todos", todoRouter);


//root route
app.get("/", (req, res) => {
    res.send("It is running");
});


//server listner
app.listen(port, () => {
    console.log("server is running on ", port)
})