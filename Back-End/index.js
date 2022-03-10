import express from "express";
import db from '../Back-End/Database.js';
import productRoutes from "../Back-End/Router.js";
import messageRoutes from "../Back-End/MessageRouter.js";
import listRoutes from "../Back-End/ListRouter.js";
import orderRoutes from "../Back-End/OrderRouter.js";
import cors from 'cors';

try {
    db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.log('connection error', error);
}

const app = express();
app.use(express.json());
app.use(cors());
app.use('/cart', productRoutes);
app.use('/message', messageRoutes);
app.use('/list', listRoutes);
app.use('/order', orderRoutes);

app.listen(5000, () => console.log("server running at port 5000"));