const express = require("express")
const router = express.Router()

const filesController = require("../Controller/file.upload.controller")
const upload = require("../config/multer")

router.post("/uploadfiles",
    upload.fields([
        {name:'adharCard'},
        {name:'panCard'},
        {name:'photo'}
    ])
    ,
    filesController.fileupload
)

module.exports =router