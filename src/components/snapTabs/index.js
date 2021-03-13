import React from "react";
import { useState, useEffect } from "react";
import Tabs from "./tab";
import TabPane from "./tabPane";
import "./snapTabs.css";
function SnapTabs() {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/d9211883-8f4c-49bd-b9d7-d55cca49f2e0")
      .then((res) => res.json())
      .then((jsonResponse) => {
        setInformation(jsonResponse.data);
      });
  }, []);
  return (
    <div className="tabsContainer">
      <h2>ویژگی‌های اسنپ</h2>
      <Tabs>
        {information.map((item) => (
          <TabPane name={item.name} key={item.id} >
              <img src={item.img} />
              <div className="text" >
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <ul>
                {item.listItems.map((ItemName, key) => (
                  <li key={key}>{ItemName}</li>
                ))}
              </ul>
              </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
export default SnapTabs;

