import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Teachers from "./pages/Teachers"
import Students from "./pages/Students"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./components/Navigation"
import Footer from './components/Footer'
import ProfilTeacher from './pages/ProfileTeacher'
import ProfilStudent from './pages/ProfileStudent'
import Reservation from './pages/Reservation'

const Wrapper = styled.div`
  min-height: calc(100vh - 142px);
`

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Wrapper>
            <Route path="/teachers/:id/reservation" exact render={props => <Reservation {...props} />} />
            <Route path="/students/:id/reservation" exact render={props => <Reservation {...props} />} />
            <Route path="/teachers/:id" exact render={props => <ProfilTeacher {...props} />} />
            <Route path="/students/:id" exact render={props => <ProfilStudent {...props} />} />
            <Route path="/login" exact render={props => <Login {...props} />} />
            <Route path="/teachers" exact render={props => <Teachers {...props} />} />
            <Route path="/students" exact render={props => <Students {...props} />} />
            <Route path="/" exact render={props => <Home {...props} />} />
          </Wrapper>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
