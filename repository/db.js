const mysql = require("mysql")

const db = mysql.createConnection({
    connectionLimit: 20,
    host: '208.91.198.166',
    user: 'stcenche_grupo2pm2',
    password: 'grupo2pm2024',
    database: 'stcenche_notes'
});

const ConnectDB = () => {
    db.connect((err) => {
        if (err) {
            console.log(err)
            console.log("Error connecting to database")
            return
        }
        console.log("Connected to database")
    })
    return db
}


module.exports = {
    ConnectDB
}