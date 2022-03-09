import Express from 'express';
import {getAllProduct, createProduct, deleteProduct} from '../Back-End/Message.js'

const Router = Express.Router();

Router.get('/', getAllProduct);
Router.post('/', createProduct);
Router.delete('/:id', deleteProduct);

export default Router;
