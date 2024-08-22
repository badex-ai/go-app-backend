import { Router } from "express";
import { getCountryInfo, getAllCountries, getCitiesForCountries } from "../controllers/countryController.js";

const router = Router()


router.get("/:countryId/cities",getCitiesForCountries)
router.get("/:countryId",getCountryInfo)
router.get("/",getAllCountries)

export default router
