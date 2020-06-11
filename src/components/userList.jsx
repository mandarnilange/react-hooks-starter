import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  Avatar,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UserList = props => {
  //useHistory is hook from react router and gives access to browser history
  const history = useHistory();

  return (
    <Card style={{ width: "auto", margin: 30 }} variant="outlined">
      <CardHeader
        avatar={<Avatar aria-label="recipe"> {props.user.id}</Avatar>}
        title={props.user.first_name}
        subheader={props.user.email}
      ></CardHeader>
      <CardContent></CardContent>
      <CardActionArea>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.setCurrentUser(props.user);
            history.push("/user/" + props.user.id);
          }}
        >
          See User
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default UserList;
