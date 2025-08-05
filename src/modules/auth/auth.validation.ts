import z from "zod";
import { IGender, Role } from "../user/user.interface";

export const userRegistrationSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.email().optional(),
  phone: z
    .string({ message: "Phone Number must be string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  password: z
    .string({ message: "Password must be string" })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }),
    gender: z.enum(Object.values(IGender)),
    role: z.enum([Role.guardian, Role.student]),
});