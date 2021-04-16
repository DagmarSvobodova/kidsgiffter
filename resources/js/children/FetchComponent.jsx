import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function FetchComponent(props) {
 
    const [childId, setChildId] = useState(0);

   

      useEffect( () => props.fetchData()
      ,[])

      

    return (
        <div className="children">

{props.children && props.children.map((child, index) =>
          <div className="child" key={index} onClick={ () => {setChildId(child.id)} 
        }>  
         <Link to={`/child/${child.id}`} >    
            
        <h2>{child.name}</h2>
        <p>{child.info}</p>
        </Link>
        <a href={child.link}>{child.name}</a>

</div>
        )}
</div> 
    );
}

export default FetchComponent;







