import { Router } from "express";
const router = Router();

/** Import controllers */
import { 
        getQuestions,
        insertQuestions,
        dropQuestions,
        getResult,
        storeResult,
        dropResult,
} from "../controllers/controller.js";

/** Questions Routes API */
// router.get('/questions', getQuestions);
// router.post('/questions', insertQuestions);

router.route('/questions')
        .get(getQuestions) /** GET Request */
        .post(insertQuestions) /** POST Request */
        .delete(dropQuestions) /** DELETE Request */

router.route('/result')
        .get(getResult)
        .post(storeResult)
        .delete(dropResult)

export default router;