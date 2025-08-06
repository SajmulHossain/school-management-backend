import { FilterQuery, Model, model, Schema } from "mongoose";
import {
  ChildRelation,
  GuardinaRelation,
  IAuthInfo,
  IGender,
  IUser,
  Role,
} from "./user.interface";

interface IUserStaticMethods extends Model<IUser> {
  isUserExist(query: FilterQuery<IUser>): Promise<IUser | null>;
}

const authInfoSchema = new Schema<IAuthInfo>(
  {
    provider: {
      type: String,
      enum: ["google", "facebook", "credential"],
      required: true,
    },
    providerID: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const childRelationSchema = new Schema<ChildRelation>(
  {
    child: {
      type: Schema.ObjectId,
      required: true,
    },
    relation: {
      type: String,
      required: true,
      enum: Object.values(GuardinaRelation),
    },
  },
  { _id: false, timestamps: true }
);

const userSchema = new Schema<IUser, IUserStaticMethods>(
  {
    name: {
      type: String,
      minlength: [2, "Name should atleast 2 characters"],
      maxlength: [40, "Name length should less than 40"],
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
    },
    photo: { type: String },
    auth_info: {
      type: [authInfoSchema],
      validate: {
        validator: (value) => value.length,
        message: "You must provide auth info",
      },
    },
    childs: [childRelationSchema],
    password: { type: String },
    profileData: Schema.Types.ObjectId,
    gender: {
      type: String,
      enum: {
        values: Object.values(IGender),
        message: `'{VALUE}' is not valid gender. Give Male or Female`,
      },
      required: [true, "Gender is required"],
    },
    role: {
      type: String,
      enum: {
        values: Object.values(Role),
        message: "'{VALUE}' is not a valid role. Give student or guardian",
      },
      required: [true, "Role is required"],
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
  {
    versionKey: false,
    timestamps: true,
    statics: {
      isUserExist: async function (query) {
        return await this.findOne(query);
      },
    },
  }
);

userSchema.pre("save", async function(next) {
  if(this.role === Role.student) {
    this.childs = undefined
  }

  next();
})

export const User = model<IUser, IUserStaticMethods>("User", userSchema);
