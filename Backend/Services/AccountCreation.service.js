const accountModel = require("../Model/CreateAccount.model")


const newAccountCreate = async(data)=>{
    try{
        const account = await accountModel.create(data)
        return account;
    }
    catch(err){
        console.log(err,"server creation errro")
    }
}

const getAccount = async()=>{
    try{
        const accountget = await accountModel.find()
        return accountget;

    }
    catch(err){
        console.log("getacount errror")
    }
}

const updateAccount = async(id,data)=>{
    try{
        const acupdate = await accountModel.findByIdAndUpdate(id,data,{new:true})
        return acupdate
    }
    catch(err){
        console.log(err,"account updation error")
    }
}

const deleteaccount = async(id)=>{
    try{
        const accountdistroy = await accountModel.findByIdAndDelete(id)
        return accountdistroy;
    }
    catch(error){
        console.log(error,"account deletion error")
    }
}

module.exports={
    newAccountCreate,
    getAccount,
    updateAccount,
    deleteaccount
}