import express from 'express';
import { createMentor, assignStudentsToMentor, getStudentsForMentor } from '../Controllers/mentController.js';

const router = express.Router();

router.post('/', createMentor);
router.post('/assign', assignStudentsToMentor);
router.get('/:id/students', getStudentsForMentor);

export default router;







