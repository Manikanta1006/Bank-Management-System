const express = require('express')
const router = express.Router()

const managerDashController = require("../Controller/managerDashController")

router.get("/alltypeloans",managerDashController.mdController);
router.get("/bargraph",managerDashController.LoansAndAccController)
router.get("/getallaccountsmd",managerDashController.mdGetAccounts)

module.exports = router;