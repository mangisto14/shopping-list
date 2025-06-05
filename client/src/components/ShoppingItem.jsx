import React from "react";

function ShoppingItem({ item }) {
  return (
    <li style={{ textDecoration: item.checked ? "line-through" : "none" }}>
      {item.name}
      {/* TODO: להוסיף כפתורי סימון/מחיקה */}
    </li>
  );
}

export default ShoppingItem;