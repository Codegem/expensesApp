import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route path="/" exact component={Home} />
          <Route path="/add-expenses" exact component={AddExpense} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
