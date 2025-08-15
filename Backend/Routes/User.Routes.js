const UserController = require("../Controller/User.detail")

const express = require("express")
const router = express.Router()

router.get("/useraccountdetail/:id",UserController.userDetailsController)

module.exports=router