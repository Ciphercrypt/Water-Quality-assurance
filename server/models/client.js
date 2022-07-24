const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema(
  {

    IPAddress: {
        type: String,
      
      },

    tapID: {
      type: String,
      required: true,
      
    },

    tapLocation: {
      type: String,
     
    },
    geoLocation: {
      type: String,
    },

   
   
    DateOfAccess: {
      type: date,
    },

   EntryID:{
    
    type:String,

   },
    Drinkability: {
        type: String,
      },
  },
  { strict: false }
);

module.exports = mongoose.model("client", ClientSchema);
