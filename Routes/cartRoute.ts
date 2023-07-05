import {addToCart, deleteCart, viewCart } from "../Controllers/cartController";
import express from "express"

const router=express.Router()

router.post("/addToCart", addToCart)
router.delete("/deleteCart", deleteCart)
router.get("/viewCart", viewCart)

export default router