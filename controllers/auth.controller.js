import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    const { username, password } = req.body

    // Cek jika user belum terdaftar
    // Lanjut Login
    // Kirim Message, username belum terdaftar
    User.findByUsername(username, async (err, user) => {
        if(err) {
            if (err.type === 'not_found') {
                // User not found (User belum terdaftar)
                // return res.status(404).send({
                //     message: `User not registered`
                // })

                throw new Error('User_not_Registered')
            } else {
                res.status(500).send({msg: "Exist some error"})
            }
        }

        // Check password itu bener atau tidak
        const userPassword = user.password
        const isValidPassword = await bcrypt.compare(password, userPassword)
        if (!isValidPassword) {
            return res.status(401).json({message: "Invalid password"})
        }

        // Lolos, generate token
        // (user info, secret key, expires time)
        const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'})
        res.json({token})
    })
}

export const register = async (req, res) => {
    // Check if username is registered
    // Get User by Username
    const userExist = await new Promise((resolve, reject) => {
        User.findByUsername(req.body.username, (err, data) => {
            if(err) {
                if (err.type === 'not_found') {
                    // Username Belum Terdaftar
                    resolve(false)
                } else {
                    // Ada Error
                    reject(err)
                }
            } else {
                // Username Sudah Terdaftar
                resolve(true)
            }
        })
    })

    if (userExist) {
        return res.status(400).json({message: "Username already exist"})
    }

    const encryptPassword = await bcrypt.hash(req.body.password, 10)
    
    const newUser = new User({
        name: req.body.name,
        alamat: req.body.alamat,
        username: req.body.username,
        password: encryptPassword,
    })
    
    User.create(newUser, (err, data) => {
        if (err) {
            res.status(500).send({msg: "Exist some error"})
            return
        }
        res.send(data)
    })
}