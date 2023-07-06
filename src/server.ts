import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from '../Routes/productRoute';
import cartRoute from '../Routes/cartRoute';
import multer from 'multer'

dotenv.config();

//config multer

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single('testImage');


//connect to mongo db

const MongoDB_connection_string:any = (process.env.MONGOPASS);
async function connectToMongoDB(connectionstring: string) {
  await mongoose.connect(connectionstring);
  console.log("connected to the database successfully!");
}
try {
  connectToMongoDB(MongoDB_connection_string)
}catch (e) {
  console.log("error occured while connecting to the database: ",e);
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(cookieParser());
app.use(upload);
const port = 5500;

//creating product

app.use("/product",productRoute)
//create cart
app.use("/cart",cartRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('MWIRIWE ARIKO');
});

app.listen(port, () => {
  console.log(`Server is running on port 5500`);
});
