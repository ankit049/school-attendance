import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar';
import Aux from '../../hoc';

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCLoseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  drawerToggleHandler = () => {
    this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}));
  }

  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClicked={this.drawerToggleHandler}/>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
