import { model, Schema } from "mongoose";
import { IPost, PostVisibility } from "./post.interface";

const postSchema = new Schema<IPost>(
  {
    heading: {
      type: String,
      trim: true,
      minlength: 0,
    },
    text: {
      type: String,
      trim: true,
      minlength: 0,
    },
    photo: {
      type: String,
      trim: true,
    },
    visibility: {
      type: [String],
      enum: Object.values(PostVisibility),
      default: [],
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Post = model("Post", postSchema);
