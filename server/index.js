const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes")
const cors = require("cors")

const app = express();
dotenv.config();

app.use(express.json());  
app.use(cors())
const connectDb = async () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log("Server Connected to Database");
    
  } catch (error) {
    console.log("Server NOT Connected to Database",error.message);
    
  }
}
connectDb();

app.get("/", (req, res) => {
  res.send("Paras's API is running ");
});

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, console.log("Server is running"));
