import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError";
import { verifyToken } from "../utils/jwt&cookie/jwt";
import { env } from "../config/env.config";
import { JwtPayload } from "jsonwebtoken";

export const checkAuth = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const {accessToken} = req.cookies;

        if(!accessToken) {
            throw new AppError(401, "Unauthorized Access");
        }

        const verifiedToken = verifyToken(accessToken, env.JWT.ACCESS_TOKEN_SECRET) as JwtPayload;

        if(!verifiedToken) {
            throw new AppError(401,"Unauthorized access");
        }                

        if(!roles.includes(verifiedToken.role)) {
            throw new AppError(403, "You are not permitted to access this");
        }

        req.user = verifiedToken;

        next();
    }
}