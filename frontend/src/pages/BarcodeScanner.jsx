import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BarcodeScanner = () => {

    const [data, setData] = useState('NotFound')

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      setData(decodedText)
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }

    const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      fps: 1,
      qrbox: { width: 250, height: 250 },   
    });
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }, []);

  return (
    <>
    <div id="reader" width="600px"></div>
    {data}<br/>
    <Link to="/search-barcode/12345">search</Link>
    </>
    );
};

export default BarcodeScanner;
