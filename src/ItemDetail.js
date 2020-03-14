import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    properties: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.weather.gov/alerts/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  if (item.properties.description == "") {
    return (
      <div>
        <h3>{item.properties.areaDesc}</h3>
        <h5>There is nothing.</h5>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{item.properties.areaDesc}</h3>
        <h5>{item.properties.description}</h5>
      </div>
    );
  }
}

export default ItemDetail;
