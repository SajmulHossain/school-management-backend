import { model, Schema } from "mongoose";
import { ChildRelation, GuardinaRelation, IAuthInfo, IGender, IUser, Role } from "./user.interface";

const authInfoSchema = new Schema<IAuthInfo>({
    provider: {
        type: String,
        enum: ["google", "facebook", "credential"],
        required: true
    },
    providerID: {
        type: String,
        required: true,
        unique: true
    }
})

const childRelationSchema = new Schema<ChildRelation>({
    child: {
        type: Schema.ObjectId,
        required: true
    },
    relation: {
        type: String,
        required: true,
        enum: Object.values(GuardinaRelation)
    }
}, {versionKey: false, timestamps: true})

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      minlength: 2,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    photo: { type: String },
    auth_info: [authInfoSchema],
    childs: [childRelationSchema],
    password: { type: String },
    profileData: [Schema.Types.ObjectId],
    gender: {
      type: String,
      enum: Object.values(IGender),
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Role),
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const User = model("User", userSchema);