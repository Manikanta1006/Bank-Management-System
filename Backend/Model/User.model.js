const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    UserType: {
        type: String,
        enum: ['Admin', "Manager", "Coustomer"],
        default: "Coustomer"
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("User",UserSchema)