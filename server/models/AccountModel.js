import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
            profileID: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        ref: "Profile"
    },
        accountName: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);
export const AccountModel = mongoose.model("Account", schema);