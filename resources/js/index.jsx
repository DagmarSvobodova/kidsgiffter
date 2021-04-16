
import ReactDOM from 'react-dom';
import {


  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './welcomepage/header/Header';
import Login from './welcomepage/header/Login';
import Body from './welcomepage/mainPage/Body';

       
    
  ReactDOM.render ((
    <Router>
        
    <Header></Header>
    <Switch>
    <Route path="/login" children={ <Login /> } />
    <Route
         exact path="/" children={ <Body /> }
         
        />
       
       
     
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

  

