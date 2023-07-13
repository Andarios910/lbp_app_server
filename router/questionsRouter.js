import { Router } from 'express';
import {
    getQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
} from '../controllers/question.js';

const router = Router();

router.get('/question', getQuestions);
router.get('/question/:id', getQuestionById);
router.post('/question', createQuestion);
router.post('/question:id', updateQuestion);
router.delete('/question:id', deleteQuestion);

export default router;