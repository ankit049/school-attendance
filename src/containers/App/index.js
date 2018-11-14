import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from '../Layout';
import classes from '../../index.css';
import Attendance from '../Attendance';
import Summary from '../Summary';


class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Layout>
          <Switch >
            <Route path="/summary" component={Summary}/>
            <Route path="/" exact component={Attendance}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
