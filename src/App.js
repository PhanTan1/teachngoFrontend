import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Teachers from "./pages/Teachers"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./components/Navigation"
import Footer from './components/Footer'
import ProfilTeacher from './pages/ProfileTeacher'
import Reservation from './pages/Reservation'

const Wrapper = styled.div`
  min-height: calc(100vh - 120px);
`

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <>
            <Navigation />
            <Wrapper>
              <Route path="/teachers/:id/reservation" exact render={props => <Reservation {...props} />} />
              <Route path="/teachers/:id" exact render={props => <ProfilTeacher {...props} />} />
              <Route path="/teachers" exact render={props => <Teachers {...props} />} />
              <Route path="/" exact render={props => <Home {...props} />} />
            </Wrapper>
            <Footer />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
