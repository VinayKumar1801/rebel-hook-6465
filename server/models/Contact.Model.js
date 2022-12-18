const {Schema,model} = require("mongoose")

const ContactSchema = new Schema({
    
    c_name:{
        type:String,
        required:true,
        
    },
    c_email:{
        type:String,
        required:true,
        
    },
    c_address:{
        type:String,
        required:true,
    },
    c_contact:{
        type:Number,
        required:true,
        unique:true,
        minlength: 10,
        maxlength: 11,
    },
    user_email:{
        type:String,
        required:true,
    },
},{
    timestamps:true
})


const ContactModel = model("contact", ContactSchema)
module.exports= ContactModel