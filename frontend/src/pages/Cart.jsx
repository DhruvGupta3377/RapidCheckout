import React from "react";
import { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/api/getcartitems/";
    console.log("fetching cart items");
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // Call the async function
    fetchData();
  }, []);

  const removeitemhandler = (itemid) => {
    window.location.reload(false);
    const url = "http://127.0.0.1:8000/api/removecartitem/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
      },
      body: JSON.stringify({ id: itemid }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.itemid}>
              id = {item.itemid}
              <br />
              amount = {item.amount}
              <button
                type="submit"
                onClick={() => removeitemhandler(item.itemid)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
