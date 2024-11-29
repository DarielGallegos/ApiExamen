const express = require('express')
const parser = require('body-parser')
const router = express.Router()
const sitesController = require('../controllers/sitesController.js')

router
.get("/", sitesController.getAllSites)
.get("/:id", sitesController.getOneSite)
.get("/audio/:id", sitesController.getAudio)
.get("/video/:id", sitesController.getVideo)
.post("/", parser.json(), sitesController.createSite)
.put("/:id", parser.json(), sitesController.updateSite)
.delete("/:id", sitesController.deleteSite)

module.exports = router