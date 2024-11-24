const express = require('express')
const app = express()
const PORT = 15000

const sitesRouter = require('./routers/sitesRouter.js')

app.use("/sites", sitesRouter)
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}`);
})