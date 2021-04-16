

import React, { useState, useEffect } from 'react';
import FetchComponent from './FetchComponent';


function Children() {
    
    const [children, setChildren] = useState([]);
    const url = '/api/children'

    async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setChildren(data);
      }

    return (
        
        <FetchComponent
setChildren = {setChildren}
children = {children}
fetchData = {fetchData}

/>


       

    );
}

export default Children;


