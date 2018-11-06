import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from '../Layout';
import classes from './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
