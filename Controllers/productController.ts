import product from "../Models/productModel";


const createProduct = async (req:any, res:any):Promise<any> =>{
    try {
        const data =await product.create(req.body)

        console.log(req.body.name)
        res.status(200).send(data);
    }catch(error){
        console.error("error occured while creating product", error);
        res.sendStatus(500);
    };
};

const getAllProduct = async (req:any, res:any):Promise<any> =>{
    try {
        const data = await product.find({});
        res.status(200).send(data)
    }catch (error){
        console.error("error occured while getting products", error);
        res.sendStatus(500);
    };
};
export {createProduct, getAllProduct};