import { Router } from "express"
import { findAll, update} from "../controllers/profile.controller.js"
import authJwt from "../middlewares/authJwt.js"
const profileRoute = Router()

profileRoute.use(authJwt)
profileRoute.get('/', findAll)
profileRoute.put('/', update)

export default profileRoute