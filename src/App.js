import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LoginAccount from './components/LoginAccount';
import LoginPhonenumber from "./components/LoginPhonenumber";
import Otp from "./components/Otp";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginAccount} />
        <Route exact path="/login" component={LoginPhonenumber} />
        <Route exact path="/otp" component={Otp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
