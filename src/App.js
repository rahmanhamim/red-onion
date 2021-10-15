import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route exact path="/login">
      <Login></Login>
     </Route>
     <PrivateRoute exact path="/order">
      <Order></Order>
     </PrivateRoute>
    </Switch>
   </Router>
  </AuthProvider>
 );
}

export default App;
