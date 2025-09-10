import { Router } from "express";
import { PostController } from "./post.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post("/",checkAuth(...Object.values(Role)), PostController.createPost);
router.get("/", PostController.getNewsFeed);
router.get("/deleted", checkAuth(Role.head_teacher, Role.assistant_head_teacher));
router.delete("/:id", checkAuth(...Object.values(Role)), PostController.deletePostByUser);
router.patch("/:id", PostController.updatePost);

export const PostRoutes = router;