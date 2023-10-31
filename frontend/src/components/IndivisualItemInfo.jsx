import React from "react";
import { useState, useEffect } from "react";

const IndivisualItemInfo = (props) => {
  const [itemData, setItemData] = useState({});
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/getitembyid";
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
          },
          body: JSON.stringify({ id: props.id }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        setItemData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the async function
    fetchData();
  });

  return <div>{itemData.name}</div>;
};

export default IndivisualItemInfo;
