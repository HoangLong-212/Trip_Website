import { MyTripModel } from "../models/MyTripModel.js";

export const getMyTrip = async (req, res) => {
  try {
    // const post = new MyTripModel({
    //   collections: [
    //     {
    //       name: "Long",
    //       placeList: [
    //         {
    //           placeList_id: "62835e50bbcfaf241dc01a16",
    //           externalModelType: "Place",
    //         },
    //       ],
    //     },
    //   ],

    //   UserID: "62a97f0ea9a9b90f1d1cd37b",
    // });
    // post.save();
    await MyTripModel.find()
      .populate("collections.placeList.placeList_id")
      .exec()
      .then((myTrip) => {
        res.status(200).json(myTrip);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createCollections = async (req, res) => {
  try {
    const nameCollection = req.body;
    const newCollection = { name: nameCollection, placeList: [] };
    const UserID = req.params;
    const myTrip = await MyTripModel.findOneAndUpdate(
      { UserID: UserID },
      { $push: { collections: newCollection } },
      { new: true }
    );

    res.status(200).json(myTrip);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPlaceList = async (req, res) => {
  try {
    const newPlaceItem = req.body;
    const { UserID, collectionID } = req.params;
    const myTrip = await MyTripModel.findOne({ UserID: UserID }).then(
      (data) => {
        data.collections.findOneAndUpdate(
          { _id: collectionID },
          { $push: { placeList: newPlaceItem } },
          { new: true }
        );
      }
    );

    res.status(200).json(myTrip);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
