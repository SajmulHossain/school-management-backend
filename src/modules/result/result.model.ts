import { model, Schema } from "mongoose";
import { IResult, ResultDataType } from "./result.interface";
import { IClass, ISection } from "../student/student.interface";

const resultDataSchema = new Schema<ResultDataType>({
    roll: {
        type: Number,
        required: true,
        min: 0,
    },
    number: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    grade: {
        type: Number,
        min: 0,
        max: 5
    }
}, {versionKey: false, timestamps: true});

const resultSchema = new Schema<IResult>({
    class: {
        type: String,
        enum: Object.values(IClass),
        required: true
    },
    section: {
        type: String,
        enum: Object.values(ISection),
        required: true
    },
    teacher: {
        type: Schema.ObjectId,
        required: true,
    },
    term: {
        type: String,
        enum: ['half_yarly', 'annual'],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    results: [resultDataSchema]
}, {versionKey: false, timestamps: true})

export const Result = model("Result", resultSchema);