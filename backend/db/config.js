const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://harsh99:root@cluster0.r4zi7ji.mongodb.net/todo");

const conn = mongoose.connection;

conn.once('open', ()=>{
    console.log("MongoDB database connection established successfully!");
})