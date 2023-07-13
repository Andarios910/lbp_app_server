import { Router } from 'express';
import {
    getResult,
    storeResult,
    dropResult,
} from '../controllers/result.js'

const router = Router();

router.get('/result', getResult);
router.post('/result', storeResult);
router.delete('/result:id', dropResult);

export default router;