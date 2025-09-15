const mongoose = require('mongoose')

const LoanShema = new mongoose.Schema({
    AccountNumber:{
        type:mongoose.Schema.ObjectId,ref:'User'
    },
    Age:{
        type:String
    },
    LoanType:{
        type:String
    },
    LoanAmount:{
        type:String
    },
    Roi:{
        type:String
    },
    Tenure:{
        type:String
    },
    LoanApprove:{
        type:Boolean
    }
},
    {timestamps:true}
)
module.exports = mongoose.model('Loans',LoanShema)
