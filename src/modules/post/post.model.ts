import { model, Schema } from "mongoose";
import { IPost, PostVisibility } from "./post.interface";

const postSchema = new Schema<IPost>(
  {
    heading: {
      type: String,
      trim: true,
      min: 0
    },
    text: {
      type: String,
      trim: true,
      min: 0
    },
    photo: {
      type: String,
      trim: true,
    },
    visibility: {
        type: [String],
        enum: Object.values(PostVisibility),
        default: [],
    }
  },
  { versionKey: false, timestamps: true }
);

export const Post = model("Post", postSchema);