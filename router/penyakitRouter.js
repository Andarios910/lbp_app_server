import { Router } from 'express';
import { 
    getPenyakit,
    getPenyakitById,
    createPenyakit,
    updatePenyakit,
    deletePenyakit,
} from '../controllers/penyakit.js';

const router = Router();

router.get('/penyakit', getPenyakit);
router.get('/penyakit/:id', getPenyakitById);
router.post('/penyakit', createPenyakit);
router.post('/penyakit/:id', updatePenyakit);
router.delete('/penyakit/:id', deletePenyakit);

export default router;