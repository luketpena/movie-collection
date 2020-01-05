import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  handleClick = (target)=> {
    this.props.history.push(target);
  }

  render () {
    return (
      <header>
        <h1>Movie Database</h1>
        <div>
          <button className="nav-left" onClick={()=>(this.handleClick('/add'))}>Add Entry</button>
          <button className="nav-right" onClick={()=>(this.handleClick('/manage'))}>Manage Genres</button>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);