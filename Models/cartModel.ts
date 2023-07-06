import mongoose from "mongoose";

const cartSchema =new mongoose.Schema({
    productName:{
        type:String
    },
    Amount:{
        type:Number
    },
    Quantity:{
        type:Number
    }
    
})

export default mongoose.model('cart',cartSchema)