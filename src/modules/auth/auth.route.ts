import { Router } from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthController } from "./auth.controller";
import { userLoginZodSchema, userRegistrationZodSchema } from "./auth.validation";

const router = Router();

router.post("/register", validateRequest(userRegistrationZodSchema), AuthController.register);
router.post("/login", validateRequest(userLoginZodSchema), AuthController.login)

export const AuthRoutes = router;