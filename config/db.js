import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://htanmai23:VrFPFThXhoCFj9pN@cuvette.4goceku.mongodb.net/finalProject?retryWrites=true&w=majority&appName=Cuvette"
    );
    console.log("Database connection sucessful!!");
  } catch (err) {
    console.log("Error :", err);
    process.exit(1);
  }
};

export default db;
