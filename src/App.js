import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LoginAccount from './components/LoginAccount';
import LoginPhonenumber from "./components/LoginPhonenumber";
import Otp from "./components/Otp";
import Home from "./components/Home";
import Food from "./components/Food";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginAccount} />
        <Route exact path="/login" component={LoginPhonenumber} />
        <Route exact path="/otp" component={Otp}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/food" component={Food}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
