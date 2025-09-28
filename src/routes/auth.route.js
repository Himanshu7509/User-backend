import express from "express";
import {
  signup,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/auth.controller.js"
import { verifyToken } from "../middleware/auth.middleware.js";

const AuthRouter = express.Router();

// Public
AuthRouter.post("/signup", signup);
AuthRouter.post("/login", login);

// Protected
AuthRouter.get("/all-users", verifyToken, getAllUsers);
AuthRouter.get("/user/:id", verifyToken, getUserById);
AuthRouter.put("/update-user/:id", verifyToken, updateUser);
AuthRouter.delete("/delete-user/:id", verifyToken, deleteUser);

export default AuthRouter;
