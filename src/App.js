import React, { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import userContext from './components/userContext';


const App = () => {
  const [username, setUsername] = useState('');
  return (
    <Router>
      <Switch>
        <userContext.Provider value={{username, setUsername}}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </userContext.Provider>
      </Switch>
    </Router>
  )
}

export default App;
