import React, { useState, useEffect } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import "./California.css";

function California() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://api.weather.gov/alerts/active?area=CA");

    const items = await data.json();
    setItems(items.features);
  };

  return (
    <div>
      <h2>California</h2>

      {items.map(item => (
        <Button variant="secondary" size="lg" block key={item.properties.id}>
          <Link to={`/state/${item.properties.id}`}>
            {item.properties.areaDesc}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default California;
