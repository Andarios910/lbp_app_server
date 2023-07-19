import express from 'express';
import {
    Login,
    Me,
    LogOut,
} from '../controllers/auth.js'

const router = express.Router();

router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', LogOut);

export default router;