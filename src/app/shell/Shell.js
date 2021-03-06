import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import { unstable_Box as Box } from "@material-ui/core/Box";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import PrimaryMenu from "./PrimaryMenu";
import SongsMenu from "../pages/songs/SongsMenu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Shell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryMenu: false
    };
  }

  togglePrimaryMenu = () => {
    if (this.state.primaryMenu === true) {
      this.setState({
        primaryMenu: false
      });
    } else {
      this.setState({
        primaryMenu: true
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <AppBar position="fixed" color="default">
            <Box display="flex" justifyContent="flex-start">
              <Box display="flex" justifyContent="flex-start" width="75%">
                <Toolbar>
                  <IconButton color="inherit" aria-label="Menu" onClick={this.togglePrimaryMenu.bind(this)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit">
                    Pi
                  </Typography>
                </Toolbar>
              </Box>
              <Box display="flex" justifyContent="flex-end" width="25%">
                <Toolbar>
                  <Route exact path="/songs" component={SongsMenu} />
                </Toolbar>
              </Box>
            </Box>
          </AppBar>
          <PrimaryMenu open={this.state.primaryMenu} onToggle={this.togglePrimaryMenu.bind(this)} />
        </div>

        <Typography style={{ marginTop: "70px", maxHeight: "400px", overflow: "auto" }} variant="div">
          <div>{this.props.children}</div>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Shell);
