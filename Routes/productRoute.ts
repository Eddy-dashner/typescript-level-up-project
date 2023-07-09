import  imageupload from "../MiddleWare";
import  {createProduct, getAllProduct } from "../Controllers/productController";
import express from "express"


const router=express.Router()


router.post("/create",imageupload.single("image"),createProduct);
router.get("/allProducts",getAllProduct)



export default router




