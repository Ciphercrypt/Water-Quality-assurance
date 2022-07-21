const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlegth: 5,
      select: false,
    },
    dob: {
      type: Date,
    },
    contactNumber: {
      type: Number,
    },
    address: {
        type: String,
      },
      dateofjoining:{
        type:Date,
      }
  },
  { strict: false }
);

module.exports = mongoose.model("user", UserSchema);
