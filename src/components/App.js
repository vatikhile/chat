
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import QRCode from "qrcode.react";
import ReactDOM from 'react-dom/client';
import Chat from "./Chat";



function App() {

  const [status, setstatus] = useState(false);
  const [isQRCode, setIsQRCode] = useState();
  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    const response = axios.get('http://15.207.113.35:8080/auth/getcode')
      .then(res => {
        // setstatus(res);

        if (res.data !="<html><body><h2>Already Authenticated</h2></body></html>") {
          setIsQRCode(false)
          setstatus(res.data)
          console.log("QR");
        } else if(res.data == "<html><body><h2>Already Authenticated</h2></body></html>"){

          setIsQRCode(true)
        }
      }).catch(err => {
        // Handle errors
        setIsQRCode(true)
        //console.error(err);
      });
  };

  return (
    <>
      {!isQRCode ?
        <QRCode value={status} style={{ marginRight: 50, color: "#536DFE" }} /> :
        <Chat />
        // <div>NIhal</div>
      }
    </>

  );
}x  

export default App;
