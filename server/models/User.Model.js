const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
    }
},{
    timestamps:true
})

const UserModel = model("user", UserSchema)
module.exports= UserModel