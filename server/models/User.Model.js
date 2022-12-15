const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    username:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    name:{
        type:String,
    }
},{
    timestamps:true
})

const UserModel = model("user", UserSchema)
module.exports= UserModel