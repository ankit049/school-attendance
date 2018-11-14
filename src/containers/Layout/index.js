import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar';
import Aux from '../../hoc';
import SideDrawer from '../../components/Navigation/SideDrawer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }

  // Close Sidebar when click on Backdrop
  sideDrawerCLoseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  // Toggle Drower to show and hide Sidebar
  drawerToggleHandler = () => {
    this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
  }

  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicked={this.drawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCLoseHandler}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
