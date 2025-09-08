import { Router } from "express";
import { NoticeController } from "./notice.controller";

const router = Router();

router.post("/", NoticeController.createNotice);
router.get("/", NoticeController.getAllNotices);

export const NoticeRoutes = router;
