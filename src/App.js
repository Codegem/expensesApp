import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/";
import Header from "./components/header";
import Footer from "./components/footer/";
import Container from "./components/container";
import AddExpense from "./pages/add-expenses";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/expensesApp/" />
          </Route>
          <Route path="/expensesApp/" exact component={Home} />
          <Route
            path="/expensesApp/add-expenses"
            exact
            component={AddExpense}
          />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
