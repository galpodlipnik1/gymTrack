import express from 'express';
import { signIn, signUp, getUser, getUsers, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/getuser', getUser);
router.post('/getusers', getUsers);
router.post('/updateuser', updateUser);
router.post('/deleteuser', deleteUser);

export default router;
