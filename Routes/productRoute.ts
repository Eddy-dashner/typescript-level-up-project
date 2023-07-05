import  {createProduct, getAllProduct } from "../Controllers/productController";
import express from "express"


const router=express.Router()


router.post("/create",createProduct)
router.get("/allProducts",getAllProduct)


export default router