import { genSalt, hash } from "bcryptjs"
import { env } from "../config/env.config"

export const hashPassword = async (password: string) => {
    const salt = await genSalt(env.BCRYPT_SALT_ROUND);
    return await hash(password, salt);
}