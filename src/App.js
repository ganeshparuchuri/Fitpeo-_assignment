import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Components/Home"
import Form from "./Components/Form"
import Result from  './Components/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route path="/form/:username" component={Form} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
