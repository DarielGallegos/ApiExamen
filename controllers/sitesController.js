const { request } = require('express')
const { ConnectDB } = require('../repository/db.js')

const getAllSites = async (req, res) => {
    const db = await ConnectDB()
    db.query("SELECT * FROM Sitios", (err, result) => {
        if (err) {
            res.status(500).send("Error obteniendo sitios")
            throw err
        }
        res.status(200).send(result)
    })
}

const getOneSite = async (req, res) => {
    const db = await ConnectDB()
    const id = req.params.id
    db.query("SELECT * FROM Sitios WHERE id = ?", [id], (err, result) => {
        if(err){
            res.status(500).send("Error obteniendo sitio")
            throw err
        }
        res.status(200).send(result)
    })
}

const createSite = async (req, res) => {
    const db = await ConnectDB()
    const { descripcion, latitud, longitud, video, audio} = req.body
    db.query(`CALL sitiosInsert('${descripcion}', ${latitud}, ${longitud}, ${video}, ${audio});`, (err, result) => {
        if(err){
            res.status(500).send("Error creando sitio")
            throw err
        }
        res.status(200).send("Sitio creado")
    })
}

const updateSite = async (req, res) => {
    const db = await ConnectDB()
    const { id, descripcion, latitud, longitud, video, audio} = req.body
    db.query(`CALL sitiosUpdate('${descripcion}', ${latitud}, ${longitud}, ${video}, ${audio}, ${id});`, (err, result) => {
        if(err){
            res.status(500).send("Error actualizando sitio")
            throw err
        }
        res.status(200).send("Sitio actualizado")
    })
}

const deleteSite = async (req, res) => {
    const db = await ConnectDB()
    const id = req.params.id
    db.query("CALL sitiosDelete(?);", [id], (err, result) => {
        if(err){
            res.status(500).send("Error eliminando sitio")
            throw err
        }
        res.status(200).send("Sitio eliminado")
    })
}

module.exports = {
    getAllSites,
    getOneSite,
    createSite,
    updateSite,
    deleteSite,
}