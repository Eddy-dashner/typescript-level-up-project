"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCart = exports.viewCart = exports.deleteCart = exports.addToCart = void 0;
const productModel_1 = __importDefault(require("../Models/productModel"));
const cartModel_1 = __importDefault(require("../Models/cartModel"));
const addToCart = async (req, res) => {
    try {
        const data = req.body;
        const found = await productModel_1.default.findOne({ productName: data.productName });
        if (!found) {
            res.status(409).json({
                message: "this product is not available"
            });
        }
        else {
            const productName = found.productName;
            const Amount = found.Amount;
            res.status(200).json({
                message: " added to cart succesfully", productName
            });
            const selected = new cartModel_1.default({
                productName: found.productName,
                Amount: Amount
            });
            selected.save();
        }
    }
    catch (e) {
        console.log("this is the error:", e);
    }
};
exports.addToCart = addToCart;
const deleteCart = async (req, res) => {
    try {
        const data = req.body;
        const found = await cartModel_1.default.findOne({ productName: data.productName });
        if (!found) {
            res.status(409).json({
                message: "products removed from your cart"
            });
        }
        else {
            const id = found._id;
            await cartModel_1.default.deleteOne({ _id: id });
            res.status(200).json({
                message: "deleted from your cart",
            });
        }
    }
    catch (error) {
        console.log("error occured while deleting:", error);
    }
    ;
};
exports.deleteCart = deleteCart;
const viewCart = async (req, res) => {
    try {
        const data = await cartModel_1.default.find({});
        res.status(200).send(data);
    }
    catch (error) {
        console.error("error occured while viewing your cart", error);
        res.sendStatus(500);
    }
    ;
};
exports.viewCart = viewCart;
const updateCart = async (req, res) => {
    try {
        const data = req.body;
        const found = await cartModel_1.default.findOne({ productName: data.productName });
        if (!found) {
            res.status(409).json({
                message: "This product is not available",
            });
        }
        else {
            const productName = found.productName;
            let amount = found.Amount;
            if (data.Quantity && !isNaN(data.Quantity)) {
                amount *= data.Quantity;
            }
            const updatedCart = await cartModel_1.default.findOneAndUpdate({ productName: found }, { Amount: amount }, { new: true });
            console.log(amount);
            res.status(200).json({
                message: "Cart updated successfully",
                //   Amount: updatedCart.amount,
                productName,
                amount
            });
            const selected = new cartModel_1.default({
                productName: found.productName,
                Amount: amount
            });
            selected.save();
        }
    }
    catch (error) {
        console.log("Error occurred while updating the cart:", error);
    }
};
exports.updateCart = updateCart;
