import sql from "./connection.js"

const User = function(user) {
    this.name = user.name
    this.alamat = user.alamat
    this.username = user.username
    this.password = user.password
}

const tableName = 'users'

User.create = (newUser, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newUser, (err, res) => {
        if(err) {
            result(err, null)
            return
        }
        result(null, {id: res.insertId, newUser})
    })
}

User.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if(err) {
            result(err, null)
            return
        }
        result(null, res)
    })
}

User.findById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if(err) {
            result(null, res[0])
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

User.findByUsername = (username, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE username = ?`, username, (err, res) => {
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

User.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET nama = ?, jurusan = ?, umur = ? WHERE id = ?`,
        [data.nama, data.jurusan, data.umur, id], (err, res) => {
            if(err) {
                result(err, null)
                return
            }

            if (res.affectedRows == 0) {
                result({type: 'not_found'}, null)
                return
            }

            result(null, {id: id, data})
        })
}

User.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if(err) {
            result(err, null)
            return
        }

        if (res.affectedRows == 0) {
            result({type: 'not_found'}, null)
            return
        }

        result (null, res)
    })
}

export default User