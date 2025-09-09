import dotenv from "dotenv";

dotenv.config();

interface IEnv {
  PORT: number;
  DB_URI: string;
  NODE_ENV: string;
  BCRYPT_SALT_ROUND: number;
  ACCESS_TOKEN_SECRET: string;
  ACCESS_TOKEN_VALIDITY: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_VALIDITY: string;
}

const loadEnv = (): IEnv => {
  const envVars: string[] = [
    "PORT",
    "DB_URI",
    "NODE_ENV",
    "ACCESS_TOKEN_SECRET",
    "ACCESS_TOKEN_VALIDITY",
    "REFRESH_TOKEN_SECRET",
    "REFRESH_TOKEN_VALIDITY",
  ];

  envVars.forEach((val) => {
    if (!process.env[val]) {
      throw new Error(`${val} is not available in .env file`);
    }
  });

  return {
    PORT: Number(process.env.PORT as string),
    DB_URI: process.env.DB_URI as string,
    NODE_ENV: process.env.NODE_ENV as string,
    BCRYPT_SALT_ROUND: Number(process.env.BCRYPT_SALT_ROUND as string),
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET as string,
    ACCESS_TOKEN_VALIDITY: process.env.ACCESS_TOKEN_VALIDITY as string,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET as string,
    REFRESH_TOKEN_VALIDITY: process.env.REFRESH_TOKEN_VALIDITY as string,
  };
};

export const env = loadEnv();
