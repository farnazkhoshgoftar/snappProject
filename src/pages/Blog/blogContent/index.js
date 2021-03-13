import React, { useState, useEffect } from "react";
import "./blogContent.css";
import axios from 'axios'
const BlogContent = () => {
    const [cardData, setCardData] = useState([]);
   
    const getData = async () => {
      try {
            await axios.get("https://run.mocky.io/v3/52e8f6c4-dd85-41cb-bfee-69755c8cd026")
            .then((jsonResponse) => {
            const datas=jsonResponse.data;
            setCardData(datas);
            });
      } catch (err) {
          console.error(err);
      }
    };
    
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="wrapper">
      <div className="row">
        {cardData.length!==0?cardData.data.map((item) => (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 .imgContainer"
            key={item.id}
          >
              <img alt='cardImage' src={item.img} className="image"/>
            <div className="overlay">
                <h3>{item.thumbInfo}</h3>
                <h3>{item.title}</h3>
            </div>
          </div>
        )):null}
      </div>
    </div>
  );
};
export default BlogContent;
