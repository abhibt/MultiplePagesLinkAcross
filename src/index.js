import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";

   import Page2 from "./Page2";
   import Page3 from "./Page3";
     
   //eslint-disable-next-line
   import MyReservation from './Page1'

    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route exact path="/" component={MyReservation} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

   // ReactDOM.render(<MyReservation />, document.getElementById('root'));
   //<Route exact path="/" component={MyReservation} />