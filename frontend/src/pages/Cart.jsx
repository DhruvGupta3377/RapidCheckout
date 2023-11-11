import React from "react";
import { useState, useEffect } from "react";
import BASE_URL from "../../constant";

const Cart = () => {
  async function fetchData() {
    const apiUrl = `${BASE_URL}/api/getcartitems/`;
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

  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("fetching cart items");
    // Call the async function
    fetchData();
  }, []);

  const removeitemhandler = (itemid) => {
    async function removeitem() {
      const url = `${BASE_URL}/api/removecartitem/`;
      try {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
          },
          body: JSON.stringify({ id: itemid }),
        });
        await fetchData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    removeitem();
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
