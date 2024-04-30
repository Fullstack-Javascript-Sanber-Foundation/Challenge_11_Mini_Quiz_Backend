import { Router } from "express";
import { create, destroy, findAll, findOne, update } from "../controllers/choice.controller.js";
import authJwt from "../middlewares/authJwt.js";

const choiceRoute = Router()

choiceRoute.use(authJwt)
choiceRoute.get('/', findAll)
choiceRoute.get('/:id', findOne)
choiceRoute.post('/', create)
choiceRoute.put('/:id', update)
choiceRoute.delete('/:id', destroy)

export default choiceRoute