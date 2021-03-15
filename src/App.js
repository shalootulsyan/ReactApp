import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import NoMatch from "./Home";
import Detail from "./components/Detail";
import SignUp from "./Authentication/signup";
import Login from "./Authentication/login";
import Dragon from "./components/Category/dragon";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signup" />
          </Route>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path={"/home"} exact component={Home} />
          <Route exact path={"/rocket"} component={Home} />
          <Route exact path={"/dragons"} component={Dragon} />

          <Route exact path={"/:producttype/:productid"} component={Detail} />

          {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} /> */}
          {/* <Route exact path="/cart" component={Cart} />

        <Route
          path={"/:product/:productcategory/:productid"}
          component={ProductDetails}
        />

        <Route
          path={"/:productcategory/:productcategorylist"}
          component={ProductCategoryList}
        /> */}

          <Route component={NoMatch} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
