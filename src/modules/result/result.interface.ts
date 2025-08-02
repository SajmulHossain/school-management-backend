import { Types } from "mongoose";
import { IClass, ISection } from "../student/student.interface";

export interface ResultDataType {
    roll: number;
    number: number;
    grade?: number;
}

export interface IResult {
    class: IClass;
    section: ISection;
    teacher: Types.ObjectId;
    term: 'half_yearly' | 'annual';
    year: number;
    results: ResultDataType[];
}