import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";
import "../../styles/card.css";
import BASE_URL from "../../constant";

const Showitems = () => {

  

  const [items, setItems] = useState([]);
  useEffect(() => {
    const apiUrl = `${BASE_URL}/api/getallitems/`;
    console.log("fetching");
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section>
    {items.map((item) => {
      return (
        <div className="card" key={item.pk}>
        <Item info={item} />
        </div>
        );
      })}
      </section>
  );
};

export default Showitems;
