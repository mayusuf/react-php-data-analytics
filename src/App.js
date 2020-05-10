import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Contact from './component/Contact'

import './App.css';

class App extends Component {
  
  render(){
      return (
        <div className="App">

          <Router>

          {/* <Route exact path="/"><Home /> </Route>
          <Route path="/list"><RestaurantList /></Route>
          <Route path="/create"><RestauranCreate /> </Route>
          <Route exact path="/update/:id" 
            render={(props )=> (<RestaurantUpdate {...props } />)}> 
            </Route>
            <Route path="/details"><RestaurantDetails /> </Route>
          <Route path="/search"><RestaurantSearch /></Route> */}

          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/contact" component={Contact}/>

          </Router>
        </div>
      );
  }
}

export default App;
