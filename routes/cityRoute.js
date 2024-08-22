import { Router } from "express";
import {getCityInfo} from "../controllers/cityController.js"
import {getPlacesOfInterestInfo, markPlaceOfInterestAsVisited} from '../controllers/placeOfInterestController.js'

const router = Router() 

router.get("/:cityId/poi/:poiId",markPlaceOfInterestAsVisited)
router.get("/:cityId/pois",getPlacesOfInterestInfo)
router.get("/:cityId",getCityInfo)

export default router