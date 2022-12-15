const mongoose = require("mongoose")



const connection=async()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_CONN, { useNewUrlParser: true }).then(()=>console.log("mongo connected"))
    .catch((e)=>console.log(e))
}

module.exports= connection;