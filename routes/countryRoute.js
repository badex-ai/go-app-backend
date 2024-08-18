import { Router } from "express";
import { getCountryInfo } from "../controllers/countryController";

const route = Router()

route.get("/country/:id",getCountryInfo)
