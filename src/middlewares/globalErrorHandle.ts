/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

export const globalErrorHandle = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Something Went Wrong";
  let statusCode = 500;
  console.log("from GB Err--->", error, " gb Error");

  if (error instanceof AppError) {
    message = error.message;
    statusCode = error.statusCode;
  } else if (error instanceof Error) {
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: error.stack,
  });
};
