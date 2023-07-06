"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRoute_1 = __importDefault(require("../Routes/productRoute"));
const cartRoute_1 = __importDefault(require("../Routes/cartRoute"));
dotenv_1.default.config();
//connect to mongo db
const MongoDB_connection_string = "mongodb+srv://eddynzobarinda910:makavela123@cluster0.sbzptlt.mongodb.net/?retryWrites=true&w=majority";
async function connectToMongoDB(connectionstring) {
    await mongoose_1.default.connect(connectionstring);
    console.log("connected to the database successfully!");
}
try {
    connectToMongoDB(MongoDB_connection_string);
}
catch (e) {
    console.log("error occured while connecting to the database: ", e);
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
const port = 5500;
//creating product
app.use("/product", productRoute_1.default);
//create cart
app.use("/cart", cartRoute_1.default);
app.get('/', (req, res) => {
    res.send('MWIRIWE ARIKO');
});
app.listen(port, () => {
    console.log(`Server is running on port 5500`);
});
