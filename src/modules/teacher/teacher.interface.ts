import { Types } from "mongoose";
import { IReward } from "../reward/reward.interface";

export enum TeacherDesignation {
  head_teacher = "head_teacher",
  assistant_head_teacher = "assistant_head_teacher",
  senior_teacher = "senior_teacher",
  guest_teacher = "guest_teacher",
  teacher = "teacher",
}

export enum TeacherExpertise {
  math = "math",
  english = "english",
  bangla = "bangla",
  physics = "physics",
  chemistry = "chemistry",
  biology = "biology",
  accounting = "accounting",
  finance = "finance",
  sports = "sports",
}

export interface TeacherEducation {
  result: number;
  year: number;
  result_type: "gpa" | "cgpa";
  exam_type: "pec" | "jsc" | "ssc" | "hsc" | "graduation" | "masters" | "phd";
  institute: string;
  location: string;
  subject?: string;
}

export interface ITeacher {
  acc_id?: Types.ObjectId;
  name: string;
  gender: string;
  email: string;
  phone: string;
  designation: TeacherDesignation;
  expertise: TeacherExpertise;
  introduction: string;
  description?: string;
  rewards: IReward[];
  educations: TeacherEducation[];
  extra_curriculum_activities?: [string];
}
