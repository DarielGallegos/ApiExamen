const { execQuery } = require('../repository/db.js')

const getAllSites = async (req, res) => {
    execQuery("SELECT id, descripcion, latitud, longitud FROM Sitios")
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        res.status(500).send("Error obteniendo sitios")
    })
}

const getOneSite = async (req, res) => {
    const id = req.params.id
    execQuery(`SELECT * FROM Sitios WHERE id = ${id}`)
    .then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        res.status(500).send("Error obteniendo sitio")
    })
}

const createSite = async (req, res) => {
    const { descripcion, latitud, longitud, video, audio} = req.body
    execQuery(`CALL sitiosInsert('${descripcion}', ${latitud}, ${longitud}, '${video}', '${audio}');`)
    .then(result => {
        res.status(200).send("Sitio creado")
    })
    .catch(err => {
        res.status(500).send("Error creando sitio")
    })
}

const updateSite = async (req, res) => {
    const { descripcion, latitud, longitud, video, audio} = req.body
    const { id } = req.params
    execQuery(`CALL sitiosUpdate('${descripcion}', ${latitud}, ${longitud}, '${video}','${audio}', ${id});`)
    .then(result => {
        res.status(200).send("Sitio actualizado")
    })
    .catch(err => {
        res.status(500).send("Error actualizando sitio")
    })
}

const deleteSite = async (req, res) => {
    const id = req.params.id
    execQuery(`CALL sitiosDelete(${id});`)
    .then(result => {
        res.status(200).send("Sitio eliminado")
    })
    .catch(err => {
        res.status(500).send("Error eliminando sitio")
    })
}

const getAudio = async (req, res) => {
    const id = req.params.id
    execQuery(`SELECT audioFile FROM Sitios WHERE id = ${id}`)
    .then(result => {
        let audioBuffer = result[0]["audioFile"]
        res.status(200).send({audioFile: audioBuffer})
    })
    .catch(err => {
        res.status(500).send("Error obteniendo audio")
    })
}

const getVideo = async (req, res) => {
    const id = req.params.id
    execQuery(`SELECT videoDigital FROM Sitios WHERE id = ${id}`)
    .then(result => {
        const videoBuffer = result[0]["videoDigital"]
        res.status(200).send({ videoDigital : videoBuffer})
    })
    .catch(err => {
        res.status(500).send({message: "Error obteniendo video", error: err})
    })
}

module.exports = {
    getAllSites,
    getOneSite,
    createSite,
    updateSite,
    deleteSite,
    getAudio,
    getVideo
}