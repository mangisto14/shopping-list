import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email:{type: string, required: true, unique: true },
	password: {type: string, required:true },
}); 
export default mongoose.model("user",userSchema);