import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import styles from './App.scss';
import SettingPage from './Setting';
import HomePage from './Home';


class App extends Component {
  render() {
    console.log('styles', styles);
    
    return (
      <div className={styles['App']}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <h1 className={styles["App-title"]}>Welcome to React</h1>
        </header>
        <p className={styles["App-intro"]}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route path={'/home'} component={HomePage} />
          <Route path={'/setting'} component={SettingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
