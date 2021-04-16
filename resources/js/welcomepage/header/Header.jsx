import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu';




function Header() {

    

    return (
        <>
           <div className="header">
        
    <Menu></Menu>
                

                
        </div>
            
        </>
    );
}

export default Header;