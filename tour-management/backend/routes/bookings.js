import express from 'express';

import { verifyAdmin, verifyUser} from  "../units/verifyToken.js";
import { createBooking, getAllBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyAdmin, getAllBooking);

export default router;