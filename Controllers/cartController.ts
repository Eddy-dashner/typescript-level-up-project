import product from "../Models/productModel";
import cart from "../Models/cartModel"

const addToCart = async (req:any, res:any):Promise<any> =>{
    try{
    const data = req.body
    const found=await product.findOne({productName:data.productName})
    if(!found){
        res.status(409).json({
            message:"this product is not available"
        })
    }else{
        const productName=found.productName
        const Amount=found.Amount
        res.status(200).json({
            message:" added to cart succesfully",Amount,productName
        })
       const selected=new cart({
        productName:found,
        Amount:Amount
       })
       selected.save()
    }
}catch(e){
    console.log("this is the error:",e)
}
}

const deleteCart = async (req:any, res:any):Promise<any> =>{
        try{
            const data=req.body
            const found=await product.findOne({productName:data.productName})
            if(!found){
                res.status(409).json({
                    message:"this products is not available"
                })
            }else{
                const id=found._id
                await cart.deleteOne({_id:id})
                res.status(200).json({
                    message:"deleted from your cart",
                })
            }
        }catch(error){
            console.log("error occured while deleting:",error)
        };
    };

    const viewCart = async (req:any, res:any):Promise<any> =>{
        try {
            const data = await cart.find({});
            res.status(200).send(data)
        }catch (error){
            console.error("error occured while viewing your cart", error);
            res.sendStatus(500);
        };
    };

    // const updateCart = async (req: any, res: any): Promise<any> => {
    //     try {
    //       const data = req.body;
    //       const found = await product.findOne({ productName: data.productName });
    //       if (!found) {
    //         res.status(409).json({
    //           message: "This product is not available",
    //         });
    //       } else {
    //         const productName = found.productName;
    //         let amount = found.Amount; // Current amount from the product
    //         if (data.quantity && !isNaN(data.quantity)) {
    //           amount *= data.quantity; // Multiply amount by the quantity added
    //         }
    //         const updatedCart = await cart.findOneAndUpdate(
    //           { productName: found },
    //           { Amount: amount },
    //           { new: true }
    //         );
    //         res.status(200).json({
    //           message: "Cart updated successfully",
    //           Amount: updatedCart.Amount,
    //           productName,
    //         });
    //       }
    //     } catch (error) {
    //       console.log("Error occurred while updating the cart:", error);
    //     }
    //   };
    


export {addToCart, deleteCart, viewCart };
