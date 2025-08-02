import { model, Schema } from "mongoose";
import { IComment } from "./comment.interface";

const commentSchema = new Schema<IComment>({
    postId: {
        type: Schema.ObjectId,
        required: true
    },
    parentComment: {
        type: Schema.ObjectId,
        default: null
    }, 
    depth: {
        type: Number,
        default: 0,
        min: 0
    },
    photo: {
        type: String,
        trim: true
    },
    text: {
        type: String,
        trim: true,
        minlength: 1
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {versionKey:false, timestamps: true});

export const Comment = model("Comment", commentSchema);