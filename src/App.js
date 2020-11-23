import React, { useState } from 'react'
import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Teachers from "./pages/Teachers"
import Students from "./pages/Students"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./components/Navigation"
import Footer from './components/Footer'
import ProfilTeacher from './pages/ProfileTeacher'
import ProfilStudent from './pages/ProfileStudent'
import Reservation from './pages/Reservation'
import Signup from './pages/Signup'
import PersonalProfile from "./pages/ProfilePersonnel"
import Confirmation from "./pages/Confirmation"

const Wrapper = styled.div`
  min-height: calc(100vh - 142px);
`

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [role, setRole] = useState('teacher')
  const [id, setId] = useState('1')

  function PrivateRoute({ children, ...props }) {
    return (
      <Route
        {...props}
        render={({ location }) =>
          isLoggedIn ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

  return (
    <div className="App">
      <Router>
        <Navigation role={role} isLoggedIn={isLoggedIn} id={id} />
        <Switch>
          <Wrapper>
            <PrivateRoute path="/teachers">
              <Switch>
                <Route path="/teachers/:id/reservation" render={props => <Reservation {...props} />} />
                <Route path="/teachers/:id/profile" render={props => <PersonalProfile role={role} {...props} />} />
              </Switch>
              {/* <Reservation /> */}
            </PrivateRoute>
            {/* <PrivateRoute path="/teacher/:id/profile" >

            </PrivateRoute> */}
            <PrivateRoute path="/students" >
              <Students />
            </PrivateRoute>
            <Route path="/confirmation/:token/:login" exact render={props => <Confirmation {...props} />} />
            <Route path="/teachers/:id" exact render={props => <ProfilTeacher role={role} {...props} />} />
            <Route path="/students/:id" exact render={props => <ProfilStudent {...props} />} />
            <Route path="/login" exact render={props => <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} setId={setId} {...props} />} />
            <Route path="/signup" exact render={props => <Signup {...props} />} />
            <Route path="/teachers/list/:category" exact render={props => <Teachers {...props} />} />

            <Route path="/" exact render={props => <Home {...props} />} />
          </Wrapper>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
