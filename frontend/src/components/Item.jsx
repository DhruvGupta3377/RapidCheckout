import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const addItemHandler = () => {
    event.preventDefault()
    const itemid = props.info.pk
    const apiUrl = "http://127.0.0.1:8000/api/setcartitems/";
    console.log("cart shit");
    const cartitem = {
      itemid: itemid,
      amount: 1,
    };
    async function postData() {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
          },
          body: JSON.stringify(cartitem),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    // Call the async function
    postData();
    
  };

  return (
    <>
      <img src={props.info.image}></img>
      id = {props.info.pk}
      <br />
      name = {props.info.name}
      <br />
      price = {props.info.price}
      <br />
      <Link to={`/products/${props.info.pk}`}> View Item </Link> <br />
      <Link onClick={addItemHandler}> Add Item </Link>
      <br />
      <br />
    </>
  );
};

export default Item;
