import express from 'express';
import { createReview } from "../controllers/reviewController";
import { verifyUser} from  "../units/verifyToken.js";

const router = express.Router();

router.post('/:tourId', verifyUser, createReview);

export default router;