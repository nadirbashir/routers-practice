import { MainHeader } from "./components/MainHeader/MainHeader";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { Contact } from "./Pages/Contact";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Switch> {/*****to render only one Route at a time use switch & it renders the first path match top to bottom***/}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
