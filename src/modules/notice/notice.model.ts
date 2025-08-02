import { model, Schema } from "mongoose";
import { INotice } from "./notice.interface";

const noticeSchema = new Schema<INotice>(
  {
    heading: {
      type: String,
      required: true,
      minlength: 1,
    },
    text: {
      type: String,
      required: true,
      minlength: 1,
    },
    validity: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Notice = model("Notice", noticeSchema);