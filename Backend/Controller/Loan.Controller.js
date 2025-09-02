const loanService = require("../Services/Loan.Service")

const loancrationController = async(req,res)=>{
    try{
        const loan = await loanService.loanCreation(req.body)
        res.status(201).json(loan)
    }
    catch(err){
        res.status(500).message({message:err.message})
    }
}
module.exports ={
    loancrationController
}