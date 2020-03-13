import React, { useState, useEffect } from 'react';
import './App.css';
import './Shop.css';
import {Link} from 'react-router-dom';


function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://api.weather.gov/alerts/active?area=CA'
    );
    
    const items = await data.json();
    setItems(items.features);
  };

  return(
    <div>
      {items.map(item => (
        <h2 key={item.properties.id}>
          <Link to={`/shop/${item.properties.id}`}>{item.properties.areaDesc}</Link>
        </h2>
      ))}
      
    </div>
  );
};


export default Shop;