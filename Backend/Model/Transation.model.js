const mongoose = require('mongoose')

const transationSchema =  new mongoose.Schema({
    managerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    AccountId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount:{
        type:Number
    },
    TransationType:{
        type:String
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
},{timestamps:true}
)
module.exports =mongoose.model('Transations',transationSchema)