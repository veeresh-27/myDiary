const asyncHamdler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

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
        token: generateToken(user),
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

const authUser = asyncHamdler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, authUser };
