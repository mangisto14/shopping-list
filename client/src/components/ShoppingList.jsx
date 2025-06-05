import React, { useEffect, useState } from "react";
import ShoppingItem from "./ShoppingItem";
import api from "../api";

function ShoppingList({ user }) {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    api.get("/lists").then((resp) => setItems(resp.data.items || []));
  }, []);

  const addItem = async () => {
    if (!input) return;
    const resp = await api.post("/lists/item", { name: input });
    setItems([...items, resp.data]);
    setInput("");
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <ShoppingItem key={item._id} item={item} />
        ))}
      </ul>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="הוסף מוצר..."
      />
      <button onClick={addItem}>הוסף</button>
    </div>
  );
}

export default ShoppingList;