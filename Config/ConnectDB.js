const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("DB is connected");
  } catch (error) {
    console.log("DB is NOT connected");
  }
};
module.exports = ConnectDB;
