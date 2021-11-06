import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Nav/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import CreateProjectPage from './pages/CreateProjectPage'
import Register from './pages/RegisterPage'
import EditProjectPage from './pages/EditProjectPage';
import PostPledge from './pages/PostPledge';
import ErrorPage from './pages/Error';

function App() {
  return (
  <Router>
   <div>
     <Nav />
   
    <Switch>
       <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/project/:id">
          <ProjectPage />
        </Route>
        <Route  path='/createproject'>
            <CreateProjectPage />
        <Route path="/editproject/:id">
            <EditProjectPage />
          </Route>
        {/* <Route path="/users/:id">
            <UserPage />
        </Route> */}
        </Route>
        <Route path='/postpledge'>
            <PostPledge />
        </Route>
        <Route path='/register'>
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