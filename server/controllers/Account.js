import { AccountModel } from "../models/AccountModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { ProfileModel } from "../models/ProfileModel.js";

export const isAccountSignedIn = async (req, res) => {
    try {
      const id = req.AccountId;
      const Account = await AccountModel.findById(id);
      if (!Account) {
        return res
          .status(400)
          .json({ success: false, message: "Can't find account" });
      }
  
      return res.status(200).json({ success: true, Account });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  };

  export const SignIn = async (req, res) => {
    try {
      const { accountName, password } = req.body;
  
      if (!accountName || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Username or password cannot be empty" });
      } 
  
      const Account = await AccountModel.findOne({ accountName: accountName });
  
      if (!Account) {
        return res.status(400).json({
          success: false,
          message: "Username or password is incorrect",
        });
      }
  
      const passwordValid = await argon2.verify(Account.password, password);
      if (!passwordValid) {
        return res.status(400).json({
          success: false,
          message: "Username or password is incorrect",
        });
      }
  
      const accessToken = jwt.sign({ AccountId: Account._id }, "NLMT");
  
      res.status(200).json({ success: true, message: "Signed In", accessToken });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };
  
  export const getAccount = async (req, res) => {
    console.log("getAccount");
    try {
      const Accounts = await AccountModel.find();
      console.log("Accounts", Accounts);
      res.status(200).json(Accounts);
    } catch (err) {
      res.status(500).json({ success: false, error: err });
    }
  };

//   const testAccount = new AccountModel({
//     accountName: "huyhoang",
//     password: "hehehhe",
// });
//     testAccount.save();
  
  export const createAccount = async (req, res) => {
    try {
      const { accountData, profileData } = req.body;
      const profile = new ProfileModel(profileData)
      let account;
      const hashedPassword = await argon2.hash( accountData.password);
      const newAccount = ({
        accountName: accountData.accountName,
        password: hashedPassword,
      });
      await profile.save().then((profile) => {
        account = new AccountModel({ ...newAccount, profileID: profile._id });
      });

      if (!accountData.accountName || !accountData.password) {
        return res
          .status(400)
          .json({ success: false, message: "Username or password cannot be empty" });
      }
      await account.save().then((newAccount => {
        AccountModel.findById(newAccount._id)
        .populate(
         { path: "Profile",}
        )
        .exec()
        .then(() => {
          const accessToken = jwt.sign({ AccountId: newAccount._id }, "NLMT");
  
          res.status(200).json({ success: true, message: "Created", accessToken, accountName: newAccount.accountName, _id: newAccount._id });
        })
      }))
  
    } catch (err) {
      res.status(500).json({ success: false, error: err });
    }
  };
  
  export const updateAccount = async (req, res) => {
    try {
      const { AccountName, Password, newPassword, confirmedPassword } = req.body;
  
      if (!AccountName || !Password || !newPassword || !confirmedPassword) {
        return res.status(400).send("Username or password cannot be empty");
      }
  
      if (newPassword !== confirmedPassword) {
        return res.status(400).send("Confirmation password is not correct");
      }
  
      const Account = await AccountModel.findOne({ accountName: AccountName });
  
      if (!Account) {
        return res.status(400).send("Username or password is incorrect");
      }
  
      const passwordValid = await argon2.verify(Account.password, Password);
      if (!passwordValid && Account.password !== Password) {
        return res.status(400).send("Mật khẩu không đúng");
      }
  
      const hashedPassword = await argon2.hash(newPassword);
  
      Account.password = hashedPassword;
      await Account.save();
  
      res.status(200).json(Account);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  };