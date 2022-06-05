import { ProfileModel } from "../models/ProfileModel.js";

export const getProfile = async (req, res) => {
  try {
    await ProfileModel.find()
    .populate({
        path: "accountID"
    })
    .exec()
    .then((profiles) => { 
        res.status(200).json(profiles);
    });
  //       const profiles =  await ProfileModel.find()
    
  //       res.status(200).json(profiles);

  } catch (err) {
    res.status(500).json({ error: err });
    // next();
  }
};

// const newProfile = new ProfileModel({
//   firstName: "aaa",
//   lastName: "aa",
//   dateOfBirth: new Date,  
//   avatar: "aaa",
//   background: "aaa",
//   gender: "Male",
//   AccountID: "aaa",
// });
//  newProfile.save();

export const createProfile = async (req, res, next) => {
  // try {
  //   const newProfile = req.body;
  //   const Profile = new ProfileModel(newProfile);
  //   // await Profile.save();
  //   // res.status(200).json(Profile);
  //   await Profile.save().then((Profile) => {
  //     ProfileModel.findById(Profile._id)

  //       .populate({
  //         path: "accountID",
  //       })
  //       .exec()
  //       .then((Profile) => {
  //         res.status(200).json(Profile);
  //       });
  //   });
  // } catch (err) {
  //   res.status(500).json({ error: err });
  //   next();
  // }
};

export const updateProfile = async (req, res, next) => {
  try {
    const updateProfile = req.body;

    const Profile = await ProfileModel.findOneAndUpdate(
      { _id: updateProfile._id },
      updateProfile,
      { new: true }
    );
    res.status(200).json(Profile);
  } catch (err) {
    res.status(500).json({ error: err });
    next();
  }
};
