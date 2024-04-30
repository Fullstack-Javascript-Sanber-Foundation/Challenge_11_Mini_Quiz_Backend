import Quiz from "../models/Quiz.js";

export const create = (req, res) => {
    const newQuiz = new Quiz({
        nama_quiz: req.body.nama_quiz,
        sifat_quiz: req.body.sifat_quiz
    })

    Quiz.create(newQuiz, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findAll = (req, res) => {
    Quiz.getAll((err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findOne = (req, res) => {
Quiz.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found quiz quiz with id : ${req.params.id}`
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
const quizData = new Quiz(req.body)
Quiz.update(req.params.id, quizData, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found quiz quiz with id : ${req.params.id}`
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
Quiz.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found quiz quiz with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send({msg: "Success delete quiz quiz"})
        }
    })
}