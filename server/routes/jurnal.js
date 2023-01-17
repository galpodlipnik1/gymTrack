import express from 'express';
import {
  addWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} from '../controllers/jurnal.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/getWorkouts', auth, getWorkouts);
router.post('/', auth, addWorkout);
router.get('/:id', auth, getWorkout);
router.patch('/:id', auth, updateWorkout);
router.delete('/:id', auth, deleteWorkout);

export default router;
