import { Router } from "express";
import { CommentController } from "./comment.controller";

const router = Router();

router.post("/", CommentController.postComment);
router.get("/post/:id", CommentController.getCommentForPosts);

export const CommentRouter = router;