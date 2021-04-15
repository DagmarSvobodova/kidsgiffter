
import ReactDOM from 'react-dom';
import {


  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './welcomepage/header/Header';
import Body from './welcomepage/mainPage/Body';

       
    
  ReactDOM.render ((
    <Router>
        
    <Header></Header>
    <Switch>
    <Route
          path="/" children={ <Body /> }
         
        />
      
      </Switch>
    </Router>
           
        
            
        ), document.querySelector('#app'));
    

  

