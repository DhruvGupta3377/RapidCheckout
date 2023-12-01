import React from "react";
import "../../styles/Modal.css";
import BASE_URL from "../../constant";
import { Link } from "react-router-dom";

const CheckoutModal = ({ isOpen, onClose, items, total, fetchData }) => {
  async function paynowhandler() {
    try {
      const url = `${BASE_URL}/api/removeallcartitems/`;
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
        },
        body: JSON.stringify({ userid: 123123 }),
      });
      //   location.reload();
      await fetchData();
      onClose;
    } catch {
      (error) => {
        console.log(error);
      };
    }
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {items.map((item) => {
          return (
            <div key={item.pk}>
              ID: {item.pk} &ensp;
              Price: {item.price}
            </div>
          );
        })}
        <h5>Your Total is {total}/-</h5>{" "}
        <button className = "btn btn-primary" onClick={paynowhandler} to ="/home"> 
        <Link className="nav-link"  onClick={paynowhandler}to="/">
        Pay Now
        </Link>
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
