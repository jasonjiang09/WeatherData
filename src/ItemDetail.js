import React, { useState, useEffect } from 'react';
import './App.css';

function ItemDetail({match}) {
    
    useEffect(() => {
        fetchItem();
    }, []);
    
    const [item, setItem] = useState({
        properties: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://api.weather.gov/alerts/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }
    
    
    return(
        <div>
            <h2>{item.properties.areaDesc}</h2>
            <h3>{item.properties.description}</h3>
        </div>
    );
};


export default ItemDetail;