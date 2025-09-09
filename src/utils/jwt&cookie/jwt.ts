import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

export const createToken = (
  payload: JwtPayload,
  secret: string,
  options: string
) => {
  return jwt.sign(payload, secret, {
    expiresIn: options,
  } as SignOptions);
};

