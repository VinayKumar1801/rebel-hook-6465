var express = require('express');
const JWT = require("jsonwebtoken")
const argon2=require("argon2")
const UserModel = require("../models/User.Model")
var router = express.Router();
const Redis = require("ioredis")
const Blacklist=[]
require("dotenv").config()

const redisClient = new Redis({
  port: 12899, // Redis port
  host: "redis-12899.c264.ap-south-1-1.ec2.cloud.redislabs.com", // Redis host
  username: "default", // needs Redis >= 6
  password: "MYxqQmUvpjySl4USOUMoFeSlX4FJ8FHQ",
  db: 0, // Defaults to 0
});

/* GET users listing. */
router.post('/signup', async function (req, res) {
  const {email,password,username,name} = req.body;
  // console.log("check")
  const hash = await argon2.hash(password)
  console.log(req.body)
  const userexist = await UserModel.findOne({email,username})
  try {
    if(userexist){
      return res.status(400).send({message:"User already exist, Please enter different credentials"})
   }
 const newUser = await UserModel.create({email,password:hash, username,name})
 newUser.save()
 return res.status(201).send({message:"User created successfully"}) 
  } catch (error) {
    return res.status(404).send({message:error.message})
  }

});

const REFRESHKEY= process.env.REFRESHKEY
const SECRETKEY= process.env.SECRETKEY
// console.log(SECRETKEY)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
          const user = await UserModel.findOne({ email });
          if (await argon2.verify(user.password, password)) {
              const token = JWT.sign({ id: user._id, name: user.name}, SECRETKEY, { expiresIn: "7 days" });
              const refreshToken = JWT.sign({ id: user._id, name: user.name }, REFRESHKEY, { expiresIn: "28 days" })
              return res.status(200).send({ message: "Login successfully", token, refreshToken,user:user.name })
          }
          return res.status(401).send("Invalid Credentials")

})

router.post('/logout',(req,res)=>{
  const token = req.headers['authorization']
  try {
    Blacklist.push(token)
    // console.log(Blacklist)
      return res.status(200).send({message:"Logout Successfull"})
    } catch (error) {
    return res.status(404).send({message:error.message})
    }
})



module.exports = router;
