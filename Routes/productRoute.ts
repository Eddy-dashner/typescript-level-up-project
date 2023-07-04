import createProduct from "../Controllers/productController";
import express from "express"


const router=express.Router()


router.post("/create",createProduct)


export default router