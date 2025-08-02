import { model, Schema } from "mongoose";
import { IClass, IGroup, ISection, IStudent } from "./student.interface";
import { IGender } from "../user/user.interface";

const studentSchema = new Schema<IStudent>({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },
    class: {
        type: String,
        enum: Object.values(IClass),
        required: true
    },
    combinedRoll: {
        type: Number,
        required: true,
        min: 1,
    },
    gender: {
        type: String,
        enum: Object.values(IGender),
        required: true
    },
     group: {
        type: String,
        enum: Object.values(IGroup)
     },
     guardians: [Schema.Types.ObjectId],
     roll: { type: Number, min: 1 },
     section: { type: String, enum: Object.values(ISection) }
}, { versionKey: false, timestamps: true });

export const Student = model("Student", studentSchema);