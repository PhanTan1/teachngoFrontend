import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Teachers from "./pages/Teachers"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navigation from "./components/Navigation"
import Footer from './components/Footer'


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
              <Route path="/" exact render={props => <Home {...props} />} />
              <Route path="/teachers" render={props => <Teachers {...props} />} />
            </Wrapper>
            <Footer />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
