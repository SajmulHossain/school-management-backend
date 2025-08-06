import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { userRegistrationZodSchema } from "./auth.validation";

const router = Router();

router.post("/register", validateRequest(userRegistrationZodSchema), AuthController.register);


export const AuthRoutes = router;