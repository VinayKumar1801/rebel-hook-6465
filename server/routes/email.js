var express = require('express');
var router = express.Router();
require("dotenv").config()
const nodemailer = require('nodemailer');

function sendEmail({subject,body,selectedUsers}){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:'emailomatic1@gmail.com',
                pass:'okiiurvhvjaoofyd',
            }
        })
        let mail_config;
        selectedUsers.map((email)=>{
                mail_config = {   
                from:"emailomatic1@gmail.com",
                to:email,
                subject:subject,
                text:body
            }
            transporter.sendMail(mail_config,(error,info)=>{
                if(error){
                    console.log(error)
                    return reject({message:`An error occured`})
                }
                return resolve({message:'Email sent succesfully'})
            }); 

        })
    })
}
router.get('/',(req,res)=>{
    sendEmail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})

router.post('/',(req,res)=>{
    sendEmail(req.body)
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})






module.exports = router;
