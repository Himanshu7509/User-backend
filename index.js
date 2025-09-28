import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./src/utils/mongodb.js"
import AuthRouter from "./src/routes/auth.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AuthRouter)

dbConnect();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export default app;
