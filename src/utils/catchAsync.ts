import { NextFunction, Request, Response } from "express"

type AsyncHandler = (req: Request, res: Response) => Promise<void>;

export const catchAsync = (fn: AsyncHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res)).catch(error => next(error));
    }
}