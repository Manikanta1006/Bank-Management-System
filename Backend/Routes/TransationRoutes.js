const express = require('express')
const router = express.Router()

const trasationController = require("../Controller/Transation.Controller")

router.post("/deposite",trasationController.dipositeController)
router.get("/trasationbyacc/:id",trasationController.getacctransation)
module.exports = router