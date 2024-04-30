import Question from "../models/Question.js";

export const create = (req, res) => {
    const newQuestion = new Question({
        nama_quiz: req.body.nama_quiz,
        soal_quiz: req.body.soal_quiz,
        opsi_a: req.body.opsi_a,
        opsi_b: req.body.opsi_b,
        opsi_c: req.body.opsi_c,
        opsi_d: req.body.opsi_d
    })

    Question.create(newQuestion, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findAll = (req, res) => {
    Question.getAll((err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findOne = (req, res) => {
    Question.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found question quiz with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}

export const findQuiz = (req, res) => {
    Question.findByNameQuiz(req.params.nama_quiz, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found question quiz with name quiz : ${req.params.nama_quiz}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}

export const update = (req, res) => {
    const questionData = new Question(req.body)
    Question.update(req.params.id, questionData, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found question quiz with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}

export const destroy = (req, res) => {
    Question.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found question quiz with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send({msg: "Success delete question quiz"})
        }
    })
}