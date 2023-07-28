import { Router } from 'express';
import { 
    getGejala,
    getGejalaById,
    createGejala,
    updateGejala,
    deleteGejala,
} from '../controllers/gejala.js';

const router = Router();

router.get('/gejala', getGejala);
router.get('/gejala/:id', getGejalaById);
router.post('/gejala', createGejala);
router.post('/gejala/:id', updateGejala);
router.delete('/gejala/:id', deleteGejala);

export default router;