import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default:
      "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
  },
  background: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-150871769.jpg",
  },
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ProfileModel = mongoose.model("Profile", schema);
