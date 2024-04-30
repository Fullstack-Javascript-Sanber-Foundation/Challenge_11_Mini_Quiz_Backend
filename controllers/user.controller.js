import User from "../models/User.js"

export const create = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        alamat: req.body.alamat,
        username: req.body.username,
        password: req.body.password
    })

    User.create(newUser, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
            // throw new Error('Exist_some_error')
        }
        res.send(data)
    })
}

export const findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }
        res.send(data)
    })
}

export const findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found User with id : ${req.params.id}`
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
    const UserData = new User(req.body)
    User.update(req.params.id, UserData, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found User with id : ${req.params.id}`
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
    User.delete(req.params.id, (err, data) => {
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found User with id : ${req.params.id}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send({msg: "Success delete User"})
        }
    })
}