import dotenv from "dotenv";

dotenv.config();

interface IEnv {
  PORT: number;
  DB_URI: string;
  NODE_ENV: string;
}

const loadEnv = (): IEnv => {
  const envVars: string[] = ["PORT", "DB_URI", "NODE_ENV"];

  envVars.forEach((val) => {
    if (!process.env[val]) {
      throw new Error(`${val} is not available in .env file`);
    }
  });

  return {
    PORT: Number(process.env.PORT as string),
    DB_URI: process.env.DB_URI as string,
    NODE_ENV: process.env.NODE_ENV as string,
  };
};

export const env = loadEnv();
