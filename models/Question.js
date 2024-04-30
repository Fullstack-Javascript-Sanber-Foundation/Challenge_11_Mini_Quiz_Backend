import sql from "./connection.js"

const Question = function (question) {
    this.nama_quiz = question.nama_quiz
    this.soal_quiz = question.soal_quiz
    this.opsi_a = question.opsi_a
    this.opsi_b = question.opsi_b
    this.opsi_c = question.opsi_c
    this.opsi_d = question.opsi_d
}

const tableName = 'questions'

Question.create = (newQuestion, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newQuestion, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, {id: res.insertId, newQuestion})
    })
}

Question.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })
}

Question.findById = (id, result) => {
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

        // Data kosong
        result({type: 'not_found'}, null)
    })
}

Question.findByNameQuiz = (nama_quiz, result) => {
    sql.query(`SELECT * FROM ${tableName} WHERE nama_quiz = ${nama_quiz}`, (err, res) => {
        if (err) {
            result(null, res)
            return
        }

        // Data ditemukan
        if (res.length) {
            result(null, res[0])
            return
        }

        // Data kosong
        result({type: 'not_found'}, null)
    })
}

Question.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET no_soal_quiz = ?, soal_quiz = ? WHERE id = ?`,
        [data.no_soal_quiz, data.soal_quiz, id], (err, res) => {
            if (err) {
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

Question.delete = (id, result) => {
    sql.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        if (res.affectedRows == 0) {
            result({type: 'not_found'}, null)
            return
        }

        result(null, res)
    })
}

export default Question