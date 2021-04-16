
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

       
    
  ReactDOM.render ((
    <Router>
        <p>ahoj</p>
        
    <Header></Header>
    <Switch>
   
    <Route
         exact path="/auth" children={ <AuthPage /> }
         
        />
     <Route
         exact path="/auth/add" children={ <AddChild /> }
         
        />

<Route
         exact path="/register" children={ <Register /> }
         
        />
       
       
     
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

