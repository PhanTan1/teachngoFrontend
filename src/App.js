import './App.css';
import TeacherComponent from './components/TeacherComponent'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route /> */}
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/teachers" render={props => <TeacherComponent {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
