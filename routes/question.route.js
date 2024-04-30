import { Router } from "express";
import { create, destroy, findAll, findOne, findQuiz, update } from "../controllers/question.controller.js";
import authJwt from "../middlewares/authJwt.js";

const questionRoute = Router()

questionRoute.get('/', findAll)
questionRoute.get('/:id', findOne)
questionRoute.get('/:nama_quiz', findQuiz)

questionRoute.use(authJwt)
questionRoute.post('/', create)
questionRoute.put('/:id', update)
questionRoute.delete('/:id', destroy)

export default questionRoute