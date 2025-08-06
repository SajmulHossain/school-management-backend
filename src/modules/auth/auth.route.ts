import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { loginZodSchema, userRegistrationZodSchema } from "./auth.validation";

const router = Router();

router.post("/register", validateRequest(userRegistrationZodSchema), AuthController.register);
router.post("/login", validateRequest(loginZodSchema), AuthController.login)

export const AuthRoutes = router;