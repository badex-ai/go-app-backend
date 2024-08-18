import { Router } from "express";
const router = Router()
import {getAllUserTrips} from '../controllers/tripsController'

router.get("/mytrips",getAllUserTrips)