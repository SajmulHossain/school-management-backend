import { model, Schema } from "mongoose";
import { BoardExamTypes, IBoardResult } from "../modules/boardResult/board.result.interface";

const boardResultSchema = new Schema<IBoardResult>({
  year: {
    type: Number,
    min: 1914,
    required: true,
  },
  pass_rate: {
    type: Number,
    required: true,
    min: 0,
  },
  passed: {
    type: Number,
    required: true,
    min: 0,
  },
  failed: {
    type: Number,
    required: true,
    min: 0,
  },
  totalAttended: {
    type: Number,
    required: true,
    min: 0,
  },
  gpa_5: {
    type: Number,
    required: true,
    min: 0,
  },
  exam_type: {
    type: String,
    enum: Object.values(BoardExamTypes),
    required: true
  }
}, { versionKey: false, timestamps: true });

export const BoardResult = model("BoardResult", boardResultSchema)