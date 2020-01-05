import React, {Component} from 'react';
import {connect} from 'react-redux';

class Alert extends Component {

  closeAlert = ()=> {
    this.props.dispatch({type: 'CLEAR_ALERT'})
  }

  render() {
    return (
      <div className="alertBkg">
        <div className="alertBox">
          <button onClick={this.closeAlert}>X</button>
          <p>{this.props.text}</p>
          
        </div>
      </div>
    )
  }
}

export default connect()(Alert);