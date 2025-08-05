import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router();

 interface IRouter {
   path: string;
   route: Router;
 }

const routes: IRouter[] = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

routes.forEach(route => {
    router.use(route.path, route.route);
})