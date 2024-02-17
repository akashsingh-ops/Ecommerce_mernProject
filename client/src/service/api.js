import axios from "axios";
const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    // console.log("ggggg", user);
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("Error while calling Signup API:", error.message);
    // return null; // Return null in case of an error
  }
};
