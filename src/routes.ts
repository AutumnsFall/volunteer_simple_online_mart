import { Router } from 'express';
import { helloWorldHandler } from './handler';

const router = Router();

router.get('/', helloWorldHandler);
router.post('/', (req, res) => {
    res.send('Hello, World!');
});

export default router;
