/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { handleZodError } from "../helpers/error/zodError";
import { handleValidationError } from "../helpers/error/validationError";
import { env } from "../config/env.config";

interface IErrors {
  path: PropertyKey;
  message: string;
}

export const globalErrorHandle = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Something Went Wrong";
  let statusCode = 500;
  let errors: IErrors[] = [];

  console.log("from GB Err--->", error, " gb Error");

  if (error.name === "ValidationError") {
    message = 'Validation Error';
    statusCode = 400;
    errors = handleValidationError(error);
  } else if (error.name === "ZodError") {
    statusCode = 400;
    message = "ZodError";
    errors = handleZodError(error);
  } else if (error instanceof AppError) {
    message = error.message;
    statusCode = error.statusCode;
  } else if (error instanceof Error) {
    message = error.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    error: env.NODE_ENV === "development" ? error : undefined,
    stack: env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
