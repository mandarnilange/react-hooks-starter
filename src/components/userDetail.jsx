import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const UserDetail = props => {
  //useParams is router hook gets access to id defined in path /user/:id
  let { id } = useParams();

  //useState allows defining state and it can be used multiple times to define different states
  let [userObj, setUserObj] = useState(null);
  let [currId, setCurrId] = useState(parseInt(id));

  //useEffect hook replaces componentDidMount, componentDidUpdate, componentWillUnmout and reduces code duplication
  useEffect(
    () => {
      //fetch sample request from reqres.in for loading users
      fetch(`https://reqres.in/api/users/` + currId, {
        method: "GET",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
        }
      })
        .then(res => res.json())
        .then(response => {
          setUserObj(response.data);
        })
        .catch(error => console.log(error));
    },
    //Try replacing [currId] with [] below.. server call will not be done after clicking next user details after removal
    [currId]
  );

  var name;
  if (userObj !== null && typeof userObj !== "undefined") name = userObj.email;
  else name = "not set";

  return (
    <div style={{ margin: 20 }}>
      <h1>Current user selected ID - {currId}</h1>
      <span>Email : </span> {name}
      <p></p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCurrId(parseInt(currId) + 1);
        }}
      >
        See Next User
      </Button>
    </div>
  );
};

export default UserDetail;
