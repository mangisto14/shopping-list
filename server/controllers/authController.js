import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ user, token });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: "Invalid credentials" });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ user, token });
};