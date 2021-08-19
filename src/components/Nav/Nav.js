import React from 'react';
import { AppBar, Button, Toolbar, Typography, styled } from '@material-ui/core';

const MyAppBar = styled(AppBar)({
  background: '#05386B',
  color: '#EDF5E1'
})

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }
  
  
  render() {

    return (
      <MyAppBar position='static'>
        <Toolbar>
          <Typography>Home</Typography>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </MyAppBar>

    )
  }
}

export default Nav;