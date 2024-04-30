import sql from "./connection.js"

const Quiz = function (quiz) {
    this.nama_quiz = quiz.nama_quiz
    this.sifat_quiz = quiz.sifat_quiz
}

const tableName = 'quiz'

Quiz.create = (newQuiz, result) => {
    sql.query(`INSERT INTO ${tableName} SET ?`, newQuiz, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, {id: res.insertId, newQuiz})
    })
}

Quiz.getAll = (result) => {
    sql.query(`SELECT * FROM ${tableName}`, (err, res) => {
        if (err) {
            result(err, null)
            return
        }

        result(null, res)
    })
}

Quiz.findById = (id, result) => {
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

Quiz.update = (id, data, result) => {
    sql.query(`UPDATE ${tableName} SET nama_quiz = ?, sifat_quiz = ? WHERE id = ?`,
        [data.nama_quiz, data.sifat_quiz, id], (err, res) => {
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

Quiz.delete = (id, result) => {
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

export default Quiz