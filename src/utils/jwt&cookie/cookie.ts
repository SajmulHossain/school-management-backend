import { JwtPayload } from "jsonwebtoken";
import { createToken } from "./jwt";
import { env } from "../../config/env.config";
import { Response } from "express";

export const generateCookie = (
  payload: JwtPayload
): { accessToken: string; refreshToken: string } => {
  const accessToken = createToken(
    payload,
    env.JWT.ACCESS_TOKEN_SECRET,
    env.JWT.ACCESS_TOKEN_VALIDITY
  );
  const refreshToken = createToken(
    payload,
    env.JWT.REFRESH_TOKEN_SECRET,
    env.JWT.REFRESH_TOKEN_VALIDITY
  );

  return { accessToken, refreshToken };
};

export const setCookie = (
  res: Response,
  token: { accessToken: string; refreshToken?: string }
) => {
  res.cookie("accessToken", token.accessToken, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "production" ? "none" : "strict",
  });

  if(token.refreshToken) {
    res.cookie("refreshToken", token.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: env.NODE_ENV === "production" ? "none" : "strict",
    });
  }
};
