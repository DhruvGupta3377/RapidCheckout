import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import Item from "../components/Item";

const SearchViaBarcode = () => {
  const params = useParams();
  const [data, setData] = useState({"pk" : 0})

  useEffect(() => {
    const url = `${BASE_URL}/api/searchbarcode/`;
    async function getitem() {
        try{
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token edf68cf84cd806ad12ae51271a68abd107dcc391",
                },
                body: JSON.stringify({ barcode: params.barcode }),
            });
            const dataRecieved = await response.json();
            setData(dataRecieved)
            console.log(dataRecieved);
        }catch(error){
            console.error("OOPS! item not Avialable", error);
        }
    }
    getitem();
  }, []);


  return <div>
  <Item info={data} />
  </div>;
};

export default SearchViaBarcode;
