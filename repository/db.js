const mysql = require("mysql")

const db = mysql.createPool({
    connectionLimit: 20,
    acquireTimeout: 10000,
    host: '208.91.198.166',
    user: 'stcenche_grupo2pm2',
    password: 'grupo2pm2024',
    database: 'stcenche_notes'
});

const execQuery = (sql) => {
    return new Promise((res, rej) => {
        db.query(sql, (err, result, fields) => {
            if(err) {rej(err)}
            res(result)
        })
    })
}

module.exports = {
    execQuery
}