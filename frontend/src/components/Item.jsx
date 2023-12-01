import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import BASE_URL from "../../constant";

const Item = (props) => {
  const addItemHandler = () => {
    event.preventDefault();
    const itemid = props.info.pk;
    const apiUrl = `${BASE_URL}/api/setcartitems/`;
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
      <img className="card-img-top" src={`${props.info.imagelink}`} />
      <div className="card-body">
        <h4>{props.info.name}</h4>
        ID = {props.info.pk}
        <br />
        Rs {props.info.price}/-
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={addItemHandler}
        >
          <i className="fa fa-cart-plus mr-2"></i> Add to cart
        </button>
        <br />
        <br />
      </div>
    </>
  );
};

export default Item;
