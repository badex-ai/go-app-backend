import { Router } from "express";
const router = Router()
import {getUserTrips} from '../controllers/tripsController.js'

router.get("/mytrips",getUserTrips)
export default router
