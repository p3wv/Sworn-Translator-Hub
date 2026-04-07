import { Router, type IRouter } from "express";
import healthRouter from "./health";
import translationRequestRouter from "./translation-request";

const router: IRouter = Router();

router.use(healthRouter);
router.use(translationRequestRouter);

export default router;
