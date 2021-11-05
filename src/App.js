import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import UserPage from './pages/UserPage';
import CreateProjectPage from './pages/CreateProjectPage'
import Register from './pages/RegisterPage'
import EditProjectPage from './pages/EditProjectPage';
import PostPledge from './pages/PostPledge';
import Footer from './components/Nav/Footer';

function App() {
  return (
  <Router>
   <div>
     <Nav />
   
    <Switch>
        <Route path="/project/:id">
          <ProjectPage />
        </Route>
        <Route path="/editproject/:id">
            <EditProjectPage />
          </Route>
        <Route path="/users/:id">
            <UserPage />
        </Route>
        <Route exact path='/createproject'>
            <CreateProjectPage />
        </Route>
        <Route exact path='/postpledge'>
            <PostPledge />
        </Route>
        <Route exact path='/register'>
            <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
    </Switch>

    <Footer />
    </div>
    </Router>
  );
}

export default App;