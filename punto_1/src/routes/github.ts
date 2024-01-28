import {Router} from 'express';
import { getRepositorios } from '../controllers/github';

const router = Router();

// Obtiene repositorios
router.get('/repositorios', getRepositorios);

export default router;