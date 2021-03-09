import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import Menu from './Components/Navigation/Menu';


function App() {
  return (
    <div >
      <Router>
        <Menu></Menu>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <h4>404 Not Found</h4>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
