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

export enum IGender {
  male = "male",
  female = "female",
}

export enum GuardinaRelation {
  father = "father",
  mother = "mother",
  brother = "brother",
  sister = "sister",
  uncle = "uncle",
  anty = "anty",
}

export interface ChildRelation {
  relation: GuardinaRelation,
  child: Types.ObjectId;
}

export interface IUser {
  name: string;
  email?: string;
  phone?: string;
  password?: string;
  photo?: string;
  role: Role;
  auth_info: IAuthInfo[];
  childs?:ChildRelation[];
  gender: IGender;
  profileData?: Types.ObjectId[];
  isDeleted: boolean;
  isDisabled: boolean;
}