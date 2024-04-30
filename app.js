import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import questionRoute from './routes/question.route.js'
import profileRoute from './routes/profile.route.js'
import loggingMiddleware from './middlewares/loggingMiddleware.js'
import errorHandler from './middlewares/errorHandler.js'
import choiceRoute from './routes/choice.route.js'
import quizRoute from './routes/quiz.route.js'
import userRoute from './routes/user.route.js'
const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(loggingMiddleware)
app.get('/', (req, res) => res.json({msg: 'Selamat Datang di Wall-Quiz, Silahkan login terlebih dahulu'}))
app.use('/question', questionRoute)
app.use('/quiz', quizRoute)
app.use('/profile', profileRoute)
app.use('/dashboard', choiceRoute)
app.use('/choice', choiceRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
})