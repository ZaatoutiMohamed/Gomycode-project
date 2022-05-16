const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // name: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
    name: { type: String, required: true },
    // email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // isAdmin : {type: Boolean,default : false, required:true}
  }
  // , {
  //     Mongoose adds createdAt and updatedAt properties to schema.
  //     timestamps: true
  // }
);

module.exports = mongoose.model("User", userSchema);
