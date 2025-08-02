import { Types } from "mongoose";
import { IGender } from "../user/user.interface";

export enum ISection {
    A = "A",
    B = "B",
    C = "C",
}

export enum IClass {
    six = 'six',
    seven = 'seven',
    eight = 'eight',
    nine = 'nine',
    ten = 'ten',
}

// export interface IStudentPosition {
//   class: number;
//   section: "A" | "B" | "C";
//   roll: number;
//   combinedRoll: number;
//   year: number;
// }

export enum IGroup {
    science= 'science',
    commerce= 'commerce',
    arts= 'arts',
}

export interface IStudent {
    name: string;
    group?: IGroup;
    gender: IGender;
    guardians?: Types.ObjectId[];
    section?: ISection;
    roll?: number;
    combinedRoll: number;
    class: IClass;
}
