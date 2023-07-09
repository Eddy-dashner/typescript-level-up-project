import productModel from '../Models/productModel';
import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';

const createProduct= async (req:any,res:any):Promise<any> =>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUDNAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
        const image_url= await cloudinary.uploader.upload(req.file.path)
        const uploads= {
            ProductName: req.body.name,
            Amount: req.body.Amount,
            productPic: image_url.secure_url
            }
        const data=await productModel.create(uploads);
        console.log("product uploaded successfully")
       
        
        res.status(200).send(data);
    }catch(error){
        console.error("error occured while creating product",error);
        res.sendStatus(500);
    };
};

const getAllProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await productModel.find({});
    res.status(200).send(data);
  } catch (error) {
    console.error('Error occurred while getting products', error);
    res.sendStatus(500);
  }
};

export { createProduct, getAllProduct };
