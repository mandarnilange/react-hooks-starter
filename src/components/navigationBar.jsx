import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    plainText: {
      textDecoration: "none"
    }
  })
);

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="small"
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button>
          <NavLink to="/" className={classes.plainText}>
            Home
          </NavLink>
        </Button>

        <Button>
          <Link to="/about" className={classes.plainText}>
            About
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default NavigationBar;
