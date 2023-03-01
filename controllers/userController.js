const User = require('../models/userModel')

exports.home = (req,res)=>{
    res.send('Welcome to Home')
}

exports.createUser = async (req, res) => {
    try {
      // Extracting name and email from body
      const { name, email } = req.body;
  
      if (!name || !email) {
        throw new Error("Name and Email are required");
      }
  
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        throw new Error("Email already exists");
      }
  
      const user = await User.create({
        name,
        email,
      });
  
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };