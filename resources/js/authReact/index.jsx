
import ReactDOM from 'react-dom';
import {


  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../welcomepage/header/Header';

import AddChild from './AddChild';
import AuthPage from './body/AuthPage';
import Register from '../auth/Register';
import Children from '../children/Children';

       
    
  ReactDOM.render ((
    <Router>
        <p>ahoj</p>
        
    <Header></Header>

    <Children />

    <Switch>
   
    <Route
         path="/auth" children={ <AuthPage /> }
         
        />
     <Route
          path="/auth/add" children={ <AddChild /> }
         
        />

<Route
          path="/register" children={ <Register /> }
         
        />
    
   
       
       
     
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

