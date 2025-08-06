/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequest = (zodSchema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await zodSchema.parseAsync(req.body);
      next();
    } catch (error: any) {
      next(error);
    }
  };
};
