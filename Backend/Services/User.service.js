const mongoose = require("mongoose");
const User = require("../Model/User.model");

const getUserWithAccounts = async (userId) => {
  const [user] = await User.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(userId) } },
    {
      $lookup: {
        from: "accounts",
        localField: "_id",
        foreignField: "userId",
        as: "accountDetails"
      }
    }
  ]);
  return user;
};

module.exports = { getUserWithAccounts };
