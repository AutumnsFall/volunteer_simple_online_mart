import { Router } from 'express';
import {
    createProductGetHandler,
    createProductPostHandler,
    helloWorldHandler,
    showProductsHandler,
} from './handler';

const router = Router();

router.get('/create_product', createProductGetHandler);
router.post('/create_product', createProductPostHandler);
router.get('/show_products', showProductsHandler);
router.get('/', helloWorldHandler);

export default router;
