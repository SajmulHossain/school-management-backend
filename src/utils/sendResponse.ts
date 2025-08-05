import { Response } from "express";

interface IResponseData<T> {
  statusCode: number;
  message: string;
  data: T;
  meta?: {
    limit?: number;
    page?: number;
    total: number;
  };
}

export const sendResponse = <T>(res: Response, responseData: IResponseData<T>) => {
  res.status(responseData.statusCode).json({
    success: true,
    message: responseData.message,
    data: responseData.data,
    meta: responseData.meta,
  });
};
