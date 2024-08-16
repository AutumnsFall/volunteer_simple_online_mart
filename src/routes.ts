import { Router } from 'express';
import {
    createProductGetHandler,
    createProductPostHandler,
    helloWorldHandler,
} from './handler';

const router = Router();

router.get('/create_product', createProductGetHandler);
router.post('/create_product', createProductPostHandler);
router.get('/', helloWorldHandler);

export default router;
