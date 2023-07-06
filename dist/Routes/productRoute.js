"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productController_1 = require("../Controllers/productController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/create", productController_1.createProduct);
router.get("/allProducts", productController_1.getAllProduct);
exports.default = router;
