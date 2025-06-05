import React, { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [user, setUser] = useState(null);

  // TODO: לבדוק אם המשתמש כבר מחובר (JWT/localStorage)

  return (
    <div className="container">
      <h1>רשימת קניות</h1>
      {!user ? (
        <>
          <Login setUser={setUser} />
          <Register setUser={setUser} />
        </>
      ) : (
        <ShoppingList user={user} />
      )}
    </div>
  );
}

export default App;