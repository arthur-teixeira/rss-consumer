import { Router } from "express";
import ProviderController from "../controllers/ProviderController";

const router = Router();

router.post("/", ProviderController.saveFeed);

export default router;
