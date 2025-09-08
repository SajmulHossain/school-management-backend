import { Router } from "express";
import { NoticeController } from "./notice.controller";

const router = Router();

router.post("/", NoticeController.createNotice);

export const NoticeRoutes = router;