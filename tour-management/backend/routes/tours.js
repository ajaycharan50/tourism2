import express from 'express'
import{
    createTour,
    deleteTour,
    getAllTour,
    getSingleTour,
    getTourBySearch,
    updateTour,
} from "./../controllers/tourController.js";
import { verifyAdmin, verifyUser } from "../units/verifyToken.js";

const router= express.Router();

//create new tour
router.post("/", verifyAdmin ,createTour);
//update new tour
router.put("/:id",verifyAdmin , updateTour);

//delete new tour
router.delete("/:id", verifyAdmin ,deleteTour);

//get single new tour
router.get("/:id", getSingleTour);

//getALL new tour
router.get("/", getAllTour);

//get tour
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);


export default router;