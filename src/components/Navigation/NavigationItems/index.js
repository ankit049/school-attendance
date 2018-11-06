import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
  return (
    <ul className={classes.navigationItems}>
      <li className={classes.navigationItem}>
        <NavLink
          exact
          activeClassName={classes.active}
          to="/" >Home</NavLink>
      </li>
      <li className={classes.navigationItem}>
        <NavLink
          exact
          activeClassName={classes.active}
          to="/summary" >Summary</NavLink>
      </li>
    </ul>
  );
}

export default NavigationItems;
