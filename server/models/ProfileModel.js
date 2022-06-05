import { stringifyStyle } from "@vue/shared";
const Schema = mongoose.Schema
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      require: true,
    },
    dateOfBirth: {
      type: Date,
      require: true,
    },
    avatar: {
      type: String,
    },
    background: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      enum: [
        "Male",
        "Female",
        "Other",
      ],
      default: "Male",
    },
    // accountID: {
    //     type: Schema.Types.ObjectId,
    //     // type: String,
    //     ref: "Account"
    // },
  },
  { timestamps: true }
);
export const ProfileModel = mongoose.model("Profile", schema);
