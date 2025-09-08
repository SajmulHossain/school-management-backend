import { Router } from "express";
import { NoticeController } from "./notice.controller";

const router = Router();

router.post("/", NoticeController.createNotice);
router.get("/", NoticeController.getAllNotices);
router.get("/:id", NoticeController.getSingleNotice);

export const NoticeRoutes = router;
