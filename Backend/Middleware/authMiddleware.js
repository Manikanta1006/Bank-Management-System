const jwt = require("jsonwebtoken")

exports.authmiddleware = (req,res,next)=>{
    const token  = req.header.authorization.split("")[1];
    if(!token){
        return res.status(401).json({message:'no token provided'})
    }
    try{
        const decode = jwt.verify(token,"mani123")
        req.user = decode;
        next()
    }
    catch(error){
        res.status(401).json({message:"invalid token"})
    }
}

exports.isUser = (req, res, next) => {
  if (req.user.role !== "user") return res.status(403).json({ message: "User only" });
  next();
};