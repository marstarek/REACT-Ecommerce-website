import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import components
import Counter from "./components/counter/counter";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Productitem from "./components/Productitem/Productitem";
import Todo from "./Views/TODO/Todo";
import Login from "./components/Login/Login";
import Formic from "./components/Registr/Formic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <div className="xbody">
            <Route component={Home} path="/" exact />
            <Route component={Counter} path="/counter" />
            <Route component={Products} path="/products" exact />
            <Route component={Productitem} path="/products/:id" />
            <Route component={Todo} path="/todo" />
            <Route component={Login} path="/login" />
            <Route component={Formic} path="/Registr" />
          </div>{" "}
          <Counter />
        </Switch>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
