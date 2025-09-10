const User = require("../Model/User.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async(req,res)=>{
   
    const {UserName,Email,Password,UserType} = req.body;
    // console.log(UserName,Email,UserType,"datadata")
    const hashedPassword = await bcrypt.hash(Password,10)  
    try{
        const newuser = new User({UserName,Email,Password: hashedPassword,UserType})
        await newuser.save()
        res.status(201).json({message:'Registerd successfully'})
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

exports.login = async(req,res)=>{
    const {Email,Password} = req.body
    try{
        const user = await User.findOne({Email})
        if(!user){
            res.status(404).json({message:'invalid credentails'})
        }
        const match = await bcrypt.compare(Password,user.Password)
        if(!match){
            res.status(404).json({message:'invalid credential'})
        }

        const token = jwt.sign({id:user._id,UserType:user.UserType},"mani123")
        res.json({token,user:{id:user._id,UserName:user.UserName,UserType:user.UserType}})
    }
    catch(err){
        console.log(err,"error in auth controller")
        res.status(500).json({error:err.message})
    }
}