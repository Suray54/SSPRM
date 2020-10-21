import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/pages/contact/contact.components";
import Homepage from "./components/pages/homepage/homepage.components";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/index" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
