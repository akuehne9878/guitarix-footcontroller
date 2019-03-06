import React from "react";

import Launchpad from "../../components/Launchpad";
import LaunchpadTile from "../../components/LaunchpadTile";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [{ title: "test", description: "b", id: 1 }, { title: "test2", description: "d", id: 2 }, { title: "test3", description: "b", id: 3 }, { title: "test4", description: "d", id: 4 }]
    };
  }

  render() {
    let tiles = this.state.tiles;
    return (
      <Launchpad>
        {tiles.map(tile => (
          <LaunchpadTile key={tile.id} title={tile.title} route="/" />
        ))}
      </Launchpad>
    );
  }
}

export default Home;
