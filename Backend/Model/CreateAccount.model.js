const mongoose = require('mongoose')
 
const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,ref:'User'
    },
    FullName:{
        type:String
    },
    DOB:{
        type:String
    },
    Gender:{
        type:String
    },
    MobileNumber:{
        type:String
    },
    AdharNumber:{
        type:String
    },
    PANNumber:{
        type:String
    },
    adress:{
        type:String
    },
    City:{
        type:String
    },
    State:{
        type:String
    },
    PINCode:{
        type:String
    },
    Country:{
        type:String
    },
    AccountType:{
        type:String
    },
    InitialDiposit:{
        type:Number
    },
    NomineeName:{
        type:String
    },
    NomineeRelation:{
        type:String
    },
},
 {timestamps:true}
)

module.exports = mongoose.model("Account",accountSchema)