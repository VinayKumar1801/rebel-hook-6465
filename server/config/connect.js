const mongoose = require("mongoose")
require("dotenv").config()


const connection=async()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_CONN).then(()=>console.log("mongo connected"))
    // mongoose.connect(`mongodb://127.0.0.1:27017`).then(()=>console.log("mongo connected"))
    .catch((e)=>console.log(e))
}

module.exports= connection;