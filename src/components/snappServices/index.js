import React, { useEffect, useState } from "react";
import "./snappServices.css";
import "../global.css";
import axios from 'axios';
const SnapServices = () => {
  const [info, setInfo] = useState([]);

  const getData = async () => {
    try {
          await axios.get("https://run.mocky.io/v3/0ec58be3-b510-4490-97aa-cde47feb2d99")
          .then((jsonResponse) => {
          const datas=jsonResponse.data;
          setInfo(datas);
          });
    } catch (err) {
        console.error(err);
    }
  };

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className="wrapper">
      <ul className="row SnapServicesContainer">
        {info.length!==0?info.data.map((item) => (
          <li
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 serviceItemsContainer"
            key={item.id}
          >
            <div className="serviceItems">
              <img alt='cardImage' src={item.img} />
              <h2>{item.title}</h2>
              <h4>{item.goal}</h4>
              <p> {item.content}</p>
            </div>
          </li>
        )):null}
      </ul>
    </div>
  );

};
export default SnapServices;
