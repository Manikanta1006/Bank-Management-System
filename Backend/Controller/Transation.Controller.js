const dipositeService = require("../Services/transation.service")

const dipositeController = async(req,res)=>{

    console.log(req.body,"aaaaaaaaa")
    try{
        const {managerId,AccountId,amount,TransationType} = req.body;

        const result = await dipositeService.AmountDeposite(managerId,AccountId,amount,TransationType)
        console.log(result,"reresrsreserseress")
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const getacctransation = async(req,res)=>{
    console.log(req.params,"prprprrprprprpr")
    const{id} = req.params;
    console.log(id,"accc id gettting with transations")
    try{
        const trasation = await dipositeService.getTransationswithAc(id)
        res.status(200).json(trasation)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
module.exports ={
    dipositeController,
    getacctransation
}