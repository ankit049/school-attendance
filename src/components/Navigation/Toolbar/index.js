import React from 'react';

import classes from './Toolbar.css';
import baseClasses from '../../../index.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrowerToggle from '../DrowerToggle';

const Toolbar = (props) => {
  return (
    <header className={classes.toolbar}>
      <div className={[baseClasses.container, classes.headerContainer].join(' ')}>
        <Logo />
        <DrowerToggle clicked={props.drawerToggleClicked}/>
        <nav className={classes.desktopOnly}>
          <NavigationItems isAuth={props.isAuth}/>
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;
