const mongoose = require("mongoose");
const { Schema } = mongoose;

const TapSchema = new Schema(
  {
    tapID: {
      type: String,
      required: true,
    },
    tapLocation: {
      type: String,
      required: true,
    },
    geoLocation: {
      type: String,
    },
    Provider: {
      type: String,
    },
    dateOfConnection: {
      type: Date,
    },
    lastCheck: {
      type: Date,
    },
    CurrentCheck: {
      type: Date,
    },

    PHvalue: {
      type: String,
    },

    Conductivity: {
      type: String,
    },

    Turbidity: {
      type: String,
    },
    Drinkability: {
        type: String,
      },
  },
  { strict: false }
);

module.exports = mongoose.model("tap", TapSchema);
