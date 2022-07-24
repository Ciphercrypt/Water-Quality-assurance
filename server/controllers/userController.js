const bCrypt = require("bcrypt");


const ValidateUserLogin=require('../validation/UserLogin');
const validateUserRegisterDetails=require('../validation/UserRegister');

const User = require("../models/user"); //schema for user collection is written here

module.exports = {
  //to add new user
  addUser: async (req, res, next) => {
    try {
      
      const { errors, isvalid } = validateUserRegisterDetails(req.body); //checking input via validator
      console.log(req.body);
      if (isvalid) {
        return res.status(400).json(errors);
      }
      const { name, email,password,contactNumber,address, dob } = req.body;

      if (!name || !email || !dob || !address || !contactNumber || !password) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }
      const isemexist = await User.findOne({ email });
      if (isemexist) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exist" });
      }
      let hashedPassword = await bCrypt.hash(password, 10);
      let dateofjoining = new Date();
      var parts =dob.split('-');
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
      const newUser = await new User({
        name,
        email,
        password: hashedPassword,
         dob: mydate,
        contactNumber,
        address,
        dateofjoining,
      });
      await newUser.save();
      return res.status(200).json({
        success: true,
        message: "User registerd successfully",
        response: newUser,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  //for checking user login credentials
  userLogin: async (req, res, next) => {
    try {
      const { errors, isvalid } = ValidateUserLogin(req.body);
      if (isvalid) {
        return res.status(400).json({ success: false, message: errors });
      }

      const { email, password } = req.body;
      const isUser = await User.findOne({ email }).select("+password");
      if (!isUser) {
        return res
          .status(400)
          .json({ success: false, message: "User not registered!" });
      } else {
        const isCorrect = await bCrypt.compare(password, isUser.password);
        // console.log(isUser.password);
        // console.log(isCorrect);
        if (isCorrect ) {
          return res.status(200).json({
            success: true,
            message: "User registerd successfully",
            response: isUser.email,
          });
        } else {
          return res
            .status(400)
            .json({ success: false, message: "Wrong Password!" });
        }
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  //to get specific user details 
  //vulnurable to attackers , need another approach
  getUser: async (req, res, next) => {
    try {
      const { email } = req.body;
      console.log(JSON.stringify(req.body));
      if (!email) {
        return res
          .status(400)
          .json({ success: false, message: "empty email!" });
      }
      // const { email } = req.body;
      const isUser = await User.findOne({ email });
      if (!isUser) {
        return res
          .status(400)
          .json({ success: false, message: "User not registered!" });
      } else {
        return res.status(200).json({
          success: true,
          message: "User registerd successfully",
          response: isUser,
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
};
