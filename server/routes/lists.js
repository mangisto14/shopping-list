import express from "express";
import { getList, addItem } from "../controllers/listsController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", authMiddleware, getList);
router.post("/item", authMiddleware, addItem);

export default router;