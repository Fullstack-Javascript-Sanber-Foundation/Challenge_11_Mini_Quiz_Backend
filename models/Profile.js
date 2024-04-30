import sql from "./connection.js"

const Profile = function (profile) {
    this.name = profile.name
    this.alamat = profile.alamat
    this.username = profile.username
    this.password = profile.password
}

const tableName = 'users'

Profile.getById = (id, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(null, res)
            return
        }

        // Data ditemukan
        if (res.length) {
            result(null, res[0])
            return
        }
    })
}

Profile.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET name = ?, alamat = ?, username = ?, password = ? WHERE id = ?`,
        [data.name, data.alamat, data.username, data.password, id], (err, res) => {
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

export default Profile