import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import Register from './Register.jsx';


ReactDOM.render((
    <Router>
        <Switch>
          
           
            <Route path="/register" children={ <Register /> } />
        </Switch>
    </Router>
), document.querySelector('#app'));