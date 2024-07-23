import express from 'express';
import { createStudent, assignMentorToStudent, getPreviousMentorsForStudent } from '../Controllers/studController.js';

const router = express.Router();

router.post('/', createStudent);
router.post('/assign', assignMentorToStudent);
router.get('/:id/previous-mentors', getPreviousMentorsForStudent);

export default router;









