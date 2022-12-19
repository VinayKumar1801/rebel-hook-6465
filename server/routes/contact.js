var express = require('express');

const ContactModel = require("../models/Contact.Model")
var router = express.Router();

router.get("/",async(req,res)=>{
    const {user_email} = req.query;
    console.log(user_email)
    if(!user_email){
        return res.send('Enter user Email id')
    }
    
    let contact = await ContactModel.find({user_email})
    // if(contact.length>0){
    //     return res.send({data:contact,status:true,msg:"successfull"})
    // }
    // else{
    //     return res.send({data:contact,status:false,msg:"No contact available"})
    // }
    return res.send(contact)
    
})
router.post("/",async(req,res)=>{
    const {u_email,name,email,address,contact} = req.body;
   
    try {
        const find = await ContactModel.findOne({c_email:email,user_email:u_email})
        if(find){
            
            return res.send({msg:`contact already exist`});
        }
        const newContact = await ContactModel.create({user_email:u_email,c_name:name,c_email:email,c_address:address,c_contact:contact});
        return res.send(newContact)
        
    } catch (error) {
        return res.send(error.message)
    }
    
})
router.get("/features",async(req,res)=>{
    const {sort,email} = req.query;
    console.log(sort,email)
    try {
        const find = await ContactModel.find({user_email:email}).sort({sort:1})
        res.send(find)
       
        
    } catch (error) {
        return res.send(error.message)
    }
    
})






module.exports = router;
