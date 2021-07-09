import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <div id="buttonContainer">
            <Link to="/" className="linkButton">
              Home
            </Link>

            <Link to="/about" className="linkButton">
              Mypage
            </Link>

            <Link to="/dashboard" className="linkButton">
              Dashboard
            </Link>
          </div>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Mypage />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>Home</h1>;
};

const Mypage = () => {
  return <h1>Mypage</h1>;
};

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

export default App;
