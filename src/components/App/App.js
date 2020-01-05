import './App.css';
import Header from '../Header/Header';
import React, {Component} from 'react';
import {connect} from 'react-redux';

//Navigation Imports
import { HashRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import AddEntry from '../AddEntry/AddEntry';
import ManageGenre from '../ManageGenre/ManageGenre';

import Alert from '../Alert/Alert';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_GENRE'});
    this.props.dispatch({type: 'GET_MOVIE'});
  }

  renderAlert = ()=> {
    if (this.props.alert.text!=='') {
      return <Alert text={this.props.alert.text}/>
    }
  }

  setAlert = (text)=> {
    this.setState({
      alert: text
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/add' component={AddEntry}/>
            <Route path='/manage' component={ManageGenre}/>
          </Switch>
        </Router>
        {this.renderAlert()}
      </div>
      
    );
  }
}

export default connect(reduxState=>({alert: reduxState.alertReducer}))(App);
