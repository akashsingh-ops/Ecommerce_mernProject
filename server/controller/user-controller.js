import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    // Check if the username already exists
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "Username already exists" });
    }

    // If the username doesn't exist, create a new user
    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json({ message: "User created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (username already exists)
      return response.status(400).json({ message: "Usernamee already exists" });
    }
    // Other errors
    response.status(500).json({ message: error.message });
  }
};
