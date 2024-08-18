import { Router } from "express";
import {getCityInfo} from "../controllers/cityController"

const router = Router() 

router.get("/city/:id",getCityInfo)