import express from 'express';
import { signIn, signUp, getUser, getUsers, updateUser, deleteUser } from '../controllers/users.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/getuser', auth, getUser);
router.post('/getusers', auth, getUsers);
router.post('/updateuser', auth, updateUser);
router.post('/deleteuser', auth, deleteUser);

export default router;
