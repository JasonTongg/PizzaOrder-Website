import Express from 'express';
import {getAllProduct, createProduct, updateProduct, deleteProduct, getProductsById} from '../Back-End/Products.js'

const Router = Express.Router();

Router.get('/', getAllProduct);
Router.get('/:id', getProductsById);
Router.post('/', createProduct);
Router.patch('/:id', updateProduct);
Router.delete('/:id', deleteProduct);

export default Router;
