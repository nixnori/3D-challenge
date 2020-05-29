import React from 'react';
import './App.css';
import { BrowswerRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowswerRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowswerRouter>
  );
}

export default App;
