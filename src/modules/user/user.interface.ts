import { Types } from "mongoose";

export enum Role {
    head_teacher = "head_teacher",
    assistant_head_teacher = "assistant_head_teacher",
    teacher = "teacher",
    guardian = "guardian",
    student = "student",
}

export interface IAuthInfo {
  provider: "google" | "facebook" | "credential";
  providerID: string;
}

export interface IStudentPosition {
    class: number;
    section: 'A' | 'B' | 'C';
    roll: number;
    combinedRoll: number;
    year: number;
}

export interface IUser {
  name: string;
  email?: string;
  phone: string;
  password?: string;
  photo?: string;
  role: Role;
  auth_info: IAuthInfo[];
  guardians?: Types.ObjectId[];
  childs?: Types.ObjectId[];
  gender: "male" | "female";
}