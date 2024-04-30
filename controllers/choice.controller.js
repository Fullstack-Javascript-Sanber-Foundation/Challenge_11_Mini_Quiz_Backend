import authJwt from "../middlewares/authJwt.js";
import Choice from "../models/Choice.js";

export const create = (req, res) => {
    const newChoice = new Choice({
        nama_quiz: req.body.nama_quiz,
        id_user: req.userId
    })

    Choice.create(newChoice, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findAll = (req, res) => {
    Choice.getAll(req.userId, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const findOne = (req, res) => {
    Choice.findById(req.userId, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found choices quiz with id : ${req.userId}`
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
    const choiceData = new Quiz(req.body)
    Choice.update(req.params.id, choiceData, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found choices question quiz with id : ${req.params.id}`
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
    Choice.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found choices question quiz with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send({msg: "Success delete choices question quiz"})
        }
    })
}