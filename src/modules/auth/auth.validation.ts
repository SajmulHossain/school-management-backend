import z from "zod";
import { IGender, Role } from "../user/user.interface";

export const userRegistrationZodSchema = z.object({
  name: z.string('Please give string value').min(2, {
    error: iss => `Name should atleast ${iss.minimum} characters long`
  }).max(50, {
    error: iss => `Name should within ${iss.maximum} characters`
  }).trim(),
  email: z.email({error: (iss) => `${iss.input} is not valid email`}).optional(),
  phone: z
    .string({ error: "Phone Number must be string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      error:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  password: z
    .string({ error: "Password must be string" })
    .min(8, { error: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])/, {
      error: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      error: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      error: "Password must contain at least 1 number.",
    }),
    gender: z.enum(Object.values(IGender)),
    role: z.enum([Role.guardian, Role.student]),
});