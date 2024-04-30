import sql from "./connection.js"

const Choice = function (pilih) {
    this.nama_quiz = pilih.nama_quiz
    this.id_user = pilih.id_user
}

const tableName = 'pilih_quiz'

Choice.getAll = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id_user = ${id}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })
}

Choice.create = (newChoice, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newChoice, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, {id: res.insertId, newChoice})
    })
}

Choice.getById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if(err) {
            result(null, res)
            return
        }

        // Jika data ditemukan
        if(res.length) {
            result(null, res[0])
            return
        }

        // Jika kosong
        result({type: 'not_found'}, null)
    })
}

export default Choice