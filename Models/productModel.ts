import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    productName:{
        type:String
    },
    Amount:{
        type:Number
    }
})

export default mongoose.model('product',productSchema)