

import express from "express"
import { basic, login, logout, Register } from "../controler/Auth_Controler.js"

const authRoutes = express.Router()


authRoutes.post("/register",Register)
authRoutes.post("/login",login)
authRoutes.post("/logout",logout)
authRoutes.post("/",basic)

export default authRoutes