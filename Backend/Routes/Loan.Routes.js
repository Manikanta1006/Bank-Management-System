const express = require('express')
const router = express.Router()
const loanController = require("../Controller/Loan.Controller")

router.post("/createloan",loanController.loancrationController)

module.exports = router;