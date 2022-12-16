const mongoose = require("mongoose")



const connection=async()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(`mongodb://127.0.0.1:27017`).then(()=>console.log("mongo connected"))
    .catch((e)=>console.log(e))
}

module.exports= connection;