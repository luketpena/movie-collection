import React, {Component} from 'react';
import {connect} from 'react-redux';

import GenreRow from '../GenreRow/GenreRow';

class ManageGenre extends Component {

  state = {
    genre: ''
  }

  componentDidMount() {
    this.props.dispatch({type: 'GET_GENRE'})
  }

  handleChange = (event,prop)=> {
    this.setState({
      [prop]: event.target.value
    })
  }

  generateRows = ()=> {
    return this.props.genreList.map( (item,i)=> {
      return <GenreRow key={i} genre={item}/>;
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    console.log('NEW GENRE:',this.state.genre);
    
    if (this.state.genre.length>0) {
      this.props.dispatch({type: 'ADD_GENRE', payload: this.state.genre});
      this.setState({genre: ''});
    } else {
      alert('Please enter a genre name.');
    }
  }

  render() {
    return (
      <div>
        <h2>Add Genre</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Genre Name" value={this.state.genre} onChange={(event)=>this.handleChange(event,'genre')}/>
          <button>Submit</button>
        </form>
        <h2>Genres</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Movies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.generateRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(reduxState=>({genreList: reduxState.genreReducer}))(ManageGenre);