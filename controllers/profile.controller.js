import Profile from "../models/Profile.js"
import bcrypt from "bcrypt"

export const findAll = (req, res) => {    
    Profile.getById(req.userId, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }

        res.send(data)
    })
}

export const update = async (req, res) => {
    const encryptPassword = await bcrypt.hash(req.body.password, 10)
    
    const updateUser = new Profile({
        name: req.body.name,
        alamat: req.body.alamat,
        username: req.body.username,
        password: encryptPassword,
    })

    const profileUser = new Profile(req.body)
    Profile.update(req.userId, updateUser, (err, data) => {
        console.log(err)
        if (err) {
            if (err.type === 'not_found') {
                res.status(404).send({
                    message: `Not Found profile user with id : ${req.userId}`
                })
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        } else {
            res.send(data)
        }
    })
}