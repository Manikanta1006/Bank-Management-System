const AccountService = require("../Services/AccountCreation.service")

const accountcreate = async(req,res)=>{
    console.log(req.body,"rererererere")
    try{
        const account = await AccountService.newAccountCreate(req.body)
        res.status(201).json({message:"account created",account})
    }
    catch(err){
        console.log(err,"err")
        res.status(400).json({error:err.message})
    }
}

const getallaccounts = async(req,res)=>{
    try{
        const account = await AccountService.getaccount()
        res.status(201).json(account)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

const accountupdate = async(req,res)=>{
    const{id} = req.params
    try{
        const account = await AccountService.updateAccount(id,req.body)
        if(!account){
            res.status(400).json({message:"course not found"})
        }
        return res.status(200).json(account)
    }
    catch(err){
        res.status(500).message({message:err.message})
    }
}

const accountdistroy = async(req,res)=>{
    const{id}= req.params
    try{
        const account = await AccountService.deleteaccount(id)
        return res.json({message:"account deleted successfully"})

    }
    catch(err){
        res.status(500).json({message:"account deletion error"})
    }
}

const AccountApprove = async(req,res)=>{
    const {id} = req.params
    console.log(id,"account approve controller id")
    try{
        const acc = await AccountService.accapprove(id)
        res.status(201).json(acc)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports ={
    accountcreate,
    getallaccounts,
    accountupdate,
    accountdistroy,
    AccountApprove
}