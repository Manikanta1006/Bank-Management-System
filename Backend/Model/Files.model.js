const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    adharCard:{
        type:String
    },
    panCard: {
    type: String
    },
    photo: {
    type: String
    }
},
    {timestamps:true}
)
module.exports = mongoose.model("UserFiles",fileSchema)