const Tap = require("../models/tap"); //schema for user collection is written here
const isEmpty = require("../validation/is-empty");
const FindDrinkability = require("../validation/is-drinkable");

module.exports = {
  //to add new user
  addTapDetails: async (req, res, next) => {
    try {
      console.log(req.body);
   
      const {
        tapID,
        tapLocation,
        geoLocation,
        Provider,
        PHvalue,
        Conductivity,
        Turbidity,
        
      } = req.body;

      if (
        !tapID ||
        !tapLocation ||
        !geoLocation ||
        !Provider ||
        !PHvalue ||
        !Conductivity ||
        !Turbidity
      ) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }

     // const result = FindDrinkability(req.body); 

    Drinkability='drinkable';
    dateOfConnection=Date.now();
    CurrentCheck=Date.now();
    lastCheck=Date.now();

      const isemexist = await Tap.findOne({ tapID: tapID });
      if (isemexist) {
        return res
          .status(400)
          .json({ success: false, message: "Tap  already exist" });
      }
    
      const newTap = await new Tap({
        tapID,
        tapLocation,
        geoLocation,
        Provider,
        dateOfConnection,
        lastCheck,
        CurrentCheck,
        PHvalue,
        Conductivity,
        Turbidity,
        Drinkability,
      });
      await newTap.save();
      return res.status(200).json({
        success: true,
        message: "Tap registerd successfully",
        response: newTap,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

 
  getTapDetails: async (req, res, next) => {
    try {
      const { tapID } = req.body;
      console.log(JSON.stringify(req.body));
      if (!tapID) {
        return res
          .status(400)
          .json({ success: false, message: "empty tapId!" });
      }
      const isValidTapID = await Tap.findOne({ tapID: tapID });
      if (!isValidTapID) {
        return res
          .status(400)
          .json({ success: false, message: "No such Tap exists in database!" });
      } else {
        return res.status(200).json({
          success: true,
          message: "Data Fetched successfully",
          response: isValidTapID,
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getAllTapDetails: async (req, res, next) => {
    try {
      // const { email } = req.body;
      const isValidTapID = await Tap.find({});
      if (!isValidTapID) {
        return res
          .status(400)
          .json({ success: false, message: "No such Tap exists in database!" });
      } else {
        return res.status(200).json({
          success: true,
          message: "Data Fetched successfully ",
          response: isValidTapID,
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

 
};
