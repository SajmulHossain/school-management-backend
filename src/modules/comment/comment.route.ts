import { Router } from "express";
import { CommentController } from "./comment.controller";

const router = Router();

router.post("/", CommentController.postComment);
router.get("/post/:id", CommentController.getCommentForPosts);
router.get("/reply:id", CommentController.getReplies);

export const CommentRouter = router;