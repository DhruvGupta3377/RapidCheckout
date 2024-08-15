import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";
import "../../styles/card.css";
import BASE_URL from "../../constant";

const Showitems = () => {
  const [items, setItems] = useState([]);
  const [recommendedItems, setRecommentdedItems] = useState([])
  useEffect(() => {
    const apiUrl = `${BASE_URL}/api/getallitems/`;
    const recommend = `${BASE_URL}/api/gethomepageitems/`;
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

      fetch(recommend)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecommentdedItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });


  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
      Latest Products Items for you...
    </div>
    <section style={{justifyContent: 'flex-start'}}>
    {items.map((item) => {
      return (
        <div className="card" key={item.pk}>
        <Item info={item} />
        </div>
        );
      })}
      </section>
      <div style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>
      Recommended Items for you...
    </div>
      <section style={{justifyContent: 'flex-start'}}>
    {items.slice(0, 3).map((item) => {
      return (
        <div className="card" key={item.pk}>
        <Item info={item} />
        </div>
        );
      })}
      </section>
  </div>
  );
};
    // <section style={{justifyContent: 'flex-start'}}>
    // {recommendedItems.map((item) => {
    //   return (
    //     <div className="card" key={item.pk}>
    //     <Item info={item} />
    //     </div>
    //     );
    //   })}
    //   </section>

export default Showitems;
