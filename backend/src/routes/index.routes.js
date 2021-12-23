import { Router } from "express";
import { prueba } from '../controller/indexController.js'

const router = Router()

router.route("/").get(prueba)

export default router;