import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Dashboard,Help,State}  from './components'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
       <Route exact path="/">
        <Dashboard />
      </Route>
      <Route  path="/help">
        <Help />
      </Route>
      <Route  path="/state">
        <State />
      </Route>
   
   </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
