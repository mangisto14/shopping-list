import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
	name: String,
	checked: {type: boolean, default: false}
});

const shoppingListSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Type.ObjectId, ref: "user" },
	items: [itemSchema]
});

export default mongoose.model("shoppingList" shoppingListSchema);