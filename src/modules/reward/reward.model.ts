import { model, Schema } from "mongoose";
import { IReward } from "./reward.interface";

export const rewardSchema = new Schema<IReward>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: String,
    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Reward = model("Reward", rewardSchema);