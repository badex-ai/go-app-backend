import { Router } from "express";
const router = Router()
import { createNewUser,userLogin } from "../controllers/userController";

router.post("signup",createNewUser)
router.post("login",userLogin)