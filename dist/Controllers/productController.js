"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProduct = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../Models/productModel"));
const createProduct = async (req, res) => {
    try {
        const data = await productModel_1.default.create(req.body);
        console.log(req.body.name);
        res.status(200).send(data);
    }
    catch (error) {
        console.error("error occured while creating product", error);
        res.sendStatus(500);
    }
    ;
};
exports.createProduct = createProduct;
const getAllProduct = async (req, res) => {
    try {
        const data = await productModel_1.default.find({});
        res.status(200).send(data);
    }
    catch (error) {
        console.error("error occured while getting products", error);
        res.sendStatus(500);
    }
    ;
};
exports.getAllProduct = getAllProduct;
