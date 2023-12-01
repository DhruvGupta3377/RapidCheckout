import React from "react";
import { useState, useEffect } from "react";
import BASE_URL from "../../constant";
import CheckoutModal from "./CheckoutModal";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [total, setTotal] = useState(0);

  const calculateData = (data) => {
    var t = 0;
    for (const item of data) {
      t = t + item.price;
    }
    setTotal(t);
  };

  async function fetchData() {
    const apiUrl = `${BASE_URL}/api/getcartitems/`;
    console.log("fetching");
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data);
      calculateData(data);
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
    <>
      <section>
        {items.map((item) => {
          return (
            <div key={item.pk}>
              <div className="card">
                <img className="card-img-top" src={item.imagelink} />
                <div className="card-body">
                  {item.name}
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => removeitemhandler(item.pk)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="div1">
      <button className="btn btn-primary" id="checkoutbtn" onClick={openModal}>
      CheckOut
      </button>
      <h4>Total = Rs {total}/-</h4>
      </div>
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        items={items}
        total={total}
        fetchData={fetchData}
      />
    </>
  );
};

export default Cart;
