import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }

    const user = request.body;
    const newUser = new User(user);
    console.log(newUser);
    await newUser.save();
    // console.log("After save", newUser);
    response
      .status(200)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    // if (error.code === 11000) {
    //   // Duplicate key error (username already exists)
    //   return response.status(400).json({ message: "Duplicate data!!" });
    // }
    // console.error("Error during user signup:", error);
    console.error("Error in userSignup:", error.message);
    console.error("Error stack trace:", error.stack);
    response.status(500).json({ message: error.message });
  }
};
