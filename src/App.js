import React from "react";
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route }from"react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import ProjectPage from "./pages/ProjectPage";
import UserPage from "./pages/UserPage";
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
  <Router>
   <div>
     <Nav />
   
    <Switch>
        <Route path="/project/:id">
          <ProjectPage />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;