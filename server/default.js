import { products } from "./constant/data.js";

import Product from "./model/product-schema.js";
const Default = async () => {
  try {
    //   /  await Product.deleteMany({});
    // /the data will  duplicate if insertmany run again and agian so , await is used and , deletmenay in before so delete all data add only inserted data at one time
    // but to use deletmany is not a good practice , for uniqueness in database we apy in id in product-schema
    await Product.insertMany(products);
    console.log("Data imported Successfull");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

export default Default;
