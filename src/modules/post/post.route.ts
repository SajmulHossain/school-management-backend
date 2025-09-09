import { Router } from "express";
import { PostController } from "./post.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post("/",checkAuth(...Object.values(Role)), PostController.createPost);
router.get("/", PostController.getNewsFeed);

export const PostRoutes = router;