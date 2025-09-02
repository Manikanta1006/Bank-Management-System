const LoanModel = require("../Model/LoanModel")

const loanCreation = async(data)=>{
    try{

        const loan = await LoanModel.create(data)
        return loan
    }
    catch(err){
        console.log(err,"loan creation server error")
    }

}

module.exports ={
    loanCreation
}