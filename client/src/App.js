import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import RequestForm from "./components/RequestForm/RequestForm";
import Profile from "./components/Profile/Profile";
import { getUserAppts } from "./actions/appts";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAppts(user?.result?._id))
  }, [dispatch])
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/reqform" exact component={RequestForm}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
