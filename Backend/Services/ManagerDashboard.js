const loanModel = require("../Model/LoanModel")

const getloans =  async()=>{
    try{
        const loan = await loanModel.aggregate([
            {
                $group:{
                    _id:"$LoanType",
                    count:{$sum:1}
                },
                
            }
        ])
        console.log(loan,"lllllllllll")
        return loan;
    }
    catch(e){
        console.log(e,"manager dashbord getting error")
    }
}

module.exports={
    getloans
}