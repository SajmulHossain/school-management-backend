import { JwtPayload } from "jsonwebtoken";
import { createToken } from "./jwt";
import { env } from "../../config/env.config";

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
