import ShoppingList from "../models/ShoppingList.js";

export const getList = async (req, res) => {
  let list = await ShoppingList.findOne({ user: req.userId });
  if (!list) {
    list = await ShoppingList.create({ user: req.userId, items: [] });
  }
  res.json(list);
};

export const addItem = async (req, res) => {
  const { name } = req.body;
  let list = await ShoppingList.findOne({ user: req.userId });
  if (!list) list = await ShoppingList.create({ user: req.userId, items: [] });
  const item = { name };
  list.items.push(item);
  await list.save();
  res.json(item);
};