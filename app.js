const express = require('express')
const app = express()
const PORT = 15000

const sitesRouter = require('./routers/sitesRouter.js')

app.use("/sites", sitesRouter)
app.use(express.json({ limit: '50mb'}))
app.use(express.urlencoded({ limit: '50mb', extended: true}))

app.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}`);
})