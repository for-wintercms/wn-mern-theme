import User from "../models/User";

// @desc    auth  user
// route    Post    /api/users
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      generateToken(res, user._id);
      res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
      });
    }
  } catch (error) {
    res.send("Error", error);
  }
});

// @desc    register  user
// route    Post    /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    password,
    role,
    status = true,
    email,
  } = req.body;

  const userExist = await User.findOne({ username });

  if (userExist) {
    res.status(400);
    throw new Error("User is already exist");
    return;
  }

  // need to check password hashing
  const user = await User.create({
    username,
    password,
    role,
    firstname,
    lastname,
    status,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.name,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
    return;
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});
