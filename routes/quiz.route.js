import { Router } from "express";
import { create, destroy, findAll, findOne, update } from "../controllers/quiz.controller.js";
import authJwt from "../middlewares/authJwt.js";

const quizRoute = Router()

quizRoute.get('/', findAll)
quizRoute.get('/:id', findOne)

quizRoute.use(authJwt)
quizRoute.post('/', create)
quizRoute.put('/:id', update)
quizRoute.delete('/:id', destroy)

export default quizRoute