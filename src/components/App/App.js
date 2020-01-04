import React from 'react';
import './App.css';
import Header from '../Header/Header';

//Navigation Imports
import { HashRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import AddEntry from '../AddEntry/AddEntry';
import ManageGenre from '../ManageGenre/ManageGenre';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/add' component={AddEntry}/>
          <Route path='/manage' component={ManageGenre}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
