import React, { useState, useEffect } from 'react';
import Header from '../../welcomepage/header/Header';
import { Link } from "react-router-dom";


function AuthPage() {

    

    return (
        <div>
        <Header></Header>
    
      <div className="auth_body">
      <Link to="/register"><p>Přidat uživatele</p></Link>
      <Link to="/auth/add"><p>Přidat dítě</p></Link>
         </div>
        </div>
    );
}

export default AuthPage;







