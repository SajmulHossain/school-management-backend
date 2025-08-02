import { model, Schema } from "mongoose";
import { rewardSchema } from '../reward/reward.model';
import { IGender } from "../user/user.interface";
import { ITeacher, TeacherDesignation, TeacherEducation, TeacherExpertise } from "./teacher.interface";

const teacherEduSchema = new Schema<TeacherEducation>({
    exam_type: {
        type: String,
        enum: [ "pec", "jsc", "ssc", "hsc", "graduation", "masters", "phd"],
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    institute: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type:String,
        required: true,
        time: true
    },
    result: {
        type: Number,
        required: true,
        min: 0
    },
    result_type: {
        type: String,
        enum: ["gpa", "cgpa"],
        default: 'gpa',
        required: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    }
})

const teacherSchema = new Schema<ITeacher>({
    acc_id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        enum: Object.values(TeacherDesignation),
        required: true,
        default: TeacherDesignation.guest_teacher
    },
    description: { type: String },
    introduction: {
        type: String,
        required: true,
        minlength: 20
    },
    educations: [teacherEduSchema],
    expertise: {
        type: String,
        enum: Object.values(TeacherExpertise),
        required: true
    },
    extra_curriculum_activities: [String],
    gender: {
        type: String,
        required: true,
        enum: Object.values(IGender)
    },
    rewards: [rewardSchema],
}, {versionKey: false, timestamps: true});

export const Teacher = model("Teacher", teacherSchema);