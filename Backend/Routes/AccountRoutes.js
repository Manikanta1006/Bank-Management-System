const express = require("express")
const router = express.Router()

const accountController = require("../Controller/accountCreation.Controller")

router.post("/createaccount",accountController.accountcreate)
router.get("/getaccount",accountController.getallaccounts)
router.put("/updateaccount/:id",accountController.accountupdate)
router.delete("/accountdelete/:id",accountController.accountdistroy)

router.post("/accountapprove/:id",accountController.AccountApprove)

module.exports = router