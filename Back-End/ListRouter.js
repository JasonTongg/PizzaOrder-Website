import Express from 'express';
import {getAllProduct, createProduct, deleteProduct, getProductsById, updateProduct} from '../Back-End/list.js'

const Router = Express.Router();

Router.get('/', getAllProduct);
Router.get('/:id', getProductsById);
Router.post('/', createProduct);
Router.patch('/:id', updateProduct);
Router.delete('/:id', deleteProduct);

export default Router;
