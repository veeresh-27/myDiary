const asyncHamdler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHamdler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const useExists = await User.findOne({ email });
  if (useExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password, pic });

  if (user) {
    res.json({
      status: "success",
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        isAdmin: user.isAdmin,
      },
    });
  } else {
    res.status(400);
    throw new Error("Error creating user");
  }

  res.json({
    name,
    email,
  });
});

module.exports = { registerUser };
