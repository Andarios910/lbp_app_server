import { Router } from 'express';
import { 
    getSolusi,
    getSolusiById,
    createSolusi,
    updateSolusi,
    deleteSolusi,
} from '../controllers/solusi.js';

const router = Router();

router.get('/solusi', getSolusi);
router.get('/solusi/:id', getSolusiById);
router.post('/solusi', createSolusi);
router.post('/solusi/:id', updateSolusi);
router.delete('/solusi/:id', deleteSolusi);

export default router.js