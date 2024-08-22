import { Router } from "express";
const router = Router()
import {getAllUserTrips} from '../controllers/tripsController.js'

router.get("/mytrips",getAllUserTrips)
export default router
