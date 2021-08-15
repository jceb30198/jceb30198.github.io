import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }
  render() {
    return (
      <AppBar className='nav-bar' position='static'>
        <Toolbar>
          <Typography> Home</Typography>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </AppBar>

    )

  }
}

export default Nav;