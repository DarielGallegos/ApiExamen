const express = require('express')
const parser = require('body-parser')
const router = express.Router()
const sitesController = require('../controllers/sitesController.js')

router
.get("/", sitesController.getAllSites)
.get("/:id", sitesController.getOneSite)
.post("/", parser.json(), sitesController.createSite)
.put("/", parser.json(), sitesController.updateSite)
.delete("/:id", sitesController.deleteSite)

module.exports = router