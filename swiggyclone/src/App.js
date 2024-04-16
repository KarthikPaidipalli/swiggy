import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import LoginAccount from './components/LoginAccount';
import LoginPhonenumber from "./components/LoginPhonenumber";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginAccount} />
        <Route exact path="/login" element={LoginPhonenumber} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
