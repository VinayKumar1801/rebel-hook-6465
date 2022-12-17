var express = require('express');
var router = express.Router();
require("dotenv").config()
const nodemailer = require('nodemailer');

function sendEmail(){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:'emailomatic1@gmail.com',
                pass:'okiiurvhvjaoofyd',
            }
        })
        const mail_config = {
            from:"emailomatic1@gmail.com",
            to:"rock.stone951@gmail.com",
            subject:'Testing',
            text:"checking "
        }
        transporter.sendMail(mail_config,(error,info)=>{
            if(error){
                console.log(error)
                return reject({message:`An error occured`})
            }
            return resolve({message:'Email sent succesfully'})
        }); 
    })
}
router.get('/',(req,res)=>{
    sendEmail()
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(errror.message))
})

router.post('/send_email',(req,res)=>{
    sendEmail(req.body)
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(errror.message))
})






module.exports = router;
