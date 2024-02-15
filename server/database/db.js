// the connection of db is here
import mongoose from "mongoose";
export const Connection = async (username, password) => {
  try {
    // to wirte directly in user anme and pass in url is bad practice so we  write in env file
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.iklqqea.mongodb.net/?retryWrites=true&w=majority`;
    // in mongoose ther e is a function  for connect with mongoDB ie.  connect()
    await mongoose.connect(URL);
    console.log("Database connected successfull !!!");
  } catch (error) {
    console.log("Error while connnecting with DB", error);
  }
};

export default Connection;
