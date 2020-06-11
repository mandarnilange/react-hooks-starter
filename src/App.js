import React, { useEffect, useState } from "react";
import Header from "./components/header";
import NavigationBar from "./components/navigationBar";
import { Route, Switch } from "react-router-dom";
import usePageViews from "./hooks/usePageViews";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import UserList from "./components/userList";
import UserDetail from "./components/userDetail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#ffffff"
    }
  })
);

function App() {
  const classes = useStyles();

  //multiple use states can be defined
  let [users, setUsers] = useState(null);
  let [isLoading, setisLoading] = useState(true);
  let [currentUser, setCurrentUser] = useState(null);

  //Custom hook created to log application or indicate page start. reduces code duplication and centralizes same functions
  usePageViews();

  //useEffect hook replaces componentDidMount, componentDidUpdate, componentWillUnmout and reduces code duplication
  useEffect(
    () => {
      //setting state to true
      setisLoading(true);

      //fetch sample request from reqres.in for loading users
      fetch(`https://reqres.in/api/users`, {
        method: "GET",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
        }
      })
        .then(res => res.json())
        .then(response => {
          setisLoading(false);
          setUsers(response);
          setCurrentUser(response.data[0]);
        })
        .catch(error => console.log(error));
    },
    //empty array indicates to run useEffects only once
    []
  );

  //show loading message if not data loaded otherwise show users
  var homePage =
    users === null ? (
      <h3> Loading data.... </h3>
    ) : (
      users.data.map(user => (
        <UserList key={user.id} user={user} setCurrentUser={setCurrentUser} />
      ))
    );

  return (
    <div>
      <Header />
      <NavigationBar />

      <Switch>
        <Route exact path="/">
          {homePage}
        </Route>
        <Route path="/user/:id">
          <UserDetail user={currentUser} />
        </Route>
        <Route path="/user">
          {currentUser === null ? "test" : currentUser.id}
          <UserDetail user={currentUser} />
        </Route>
        <Route path="/about">About us</Route>
        <Route>{<p> 404 Not Found!!! Please go back to Home </p>}</Route>
      </Switch>

      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" /> Loading the Data from Server
      </Backdrop>
    </div>
  );
}

export default App;
