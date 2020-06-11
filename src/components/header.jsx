import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const Header = () => {
  return (
    <Box m={12}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Example - React Hooks
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
