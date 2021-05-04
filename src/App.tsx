import React, { useContext } from "react";
import classNames from "classnames";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Provider as ThemeProvider,
  Context as ThemeContext,
} from "context/ThemeContext";

import Error from "views/ErrorPage/ErrorPage";
import Create from "views/Create/Create";
import Landing from "views/Landing/Landing";
import Account from "views/Account/Account";
import VerifyEmail from "views/VerifyPages/VerifyEmail";
import AuthPagesLayout from "layouts/AuthPages";
import { lightStyles, darkStyles } from "assets/jss/html8pdf/appStyle";

const useLightStyles = makeStyles(lightStyles);
const useDarkStyles = makeStyles(darkStyles);

function Apps() {
  const { state }: any = useContext(ThemeContext);
  const classes = state.theme === "dark" ? useDarkStyles() : useLightStyles();
  const appClasses = classNames({
    [classes["@global"]]: true,
  });
  return (
    <div className={appClasses}>
      <Router>
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/create" component={Create} />
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={AuthPagesLayout} />
          <Route path="/register" component={AuthPagesLayout} />
          <Route path="/verify" component={VerifyEmail} />
          <Route exact path="/" component={Landing} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Apps />
      </ThemeProvider>
    </React.Fragment>
  );
}
