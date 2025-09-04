const userDetails = require("../Services/User.service")

const userDetailsController = async(req,res)=>{
     const {id} = req.params
    //  console.log(id,"pppppppppp")
    
    try{
        const user = await userDetails.getUserWithAccounts(id)
        // console.log(user,"useruseruser")
        res.status(201).json(user)
    }
    catch(err){
        console.log(err,"error in useraccount controller")
        res.status(500).json({error:err.message})
    }
}

module.exports={
    userDetailsController
}