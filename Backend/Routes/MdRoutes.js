const express = require('express')
const router = express.Router()

const managerDashController = require("../Controller/managerDashController")

router.get("/alltypeloans",managerDashController.mdController)

module.exports = router;