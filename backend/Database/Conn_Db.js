


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      dbName: "Anniaya_project",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true, 
    });
    console.log(" Database connected successfully...");
  } catch (error) {
    console.error(" Database connection failed:", error);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;

