import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {connect} from 'react-redux';

class AddEntry extends Component {

  state = {
    name: '',
    genre: 'Genre',
    date: '',
    img_url: '',
    runtime: '',
  }

  handleChange = (event,prop)=> {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    const {name,genre,date,img_url,runtime} = this.state;
    console.log(name,genre,date,img_url,runtime);
    
    if (name!=='' && genre!=='Genre' && date!=='' && img_url!=='' && runtime!=='') {
      this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
      this.setState({
        name: '',
        genre: 'Genre',
        date: '',
        img_url: '',
        runtime: '',
      })
    } else {
      this.props.dispatch({type: 'SET_ALERT', payload: 'Please fill out the movie information then try again.'});
    }
  }

  populateGenre = ()=> {
    return this.props.genreList.map( (item,i)=>{
      return <option key={i} value={item.id}>{item.name}</option>
    })
  }

  populateCardBox = ()=> {
    return this.props.movieList.map( (item,i)=>{
      return <MovieCard movie={item} key={i}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        <form onSubmit={this.handleSubmit}>
          <input className="fullWidthInput" type='text' placeholder='Name' value={this.state.name} onChange={(event)=>this.handleChange(event,'name')}/>
          <input className="fullWidthInput" type='text' placeholder='Image URL' value={this.state.image_url} onChange={(event)=>this.handleChange(event,'img_url')}/>
          
          <div className="inputRow">
            <div className="inputRowItem">
              <select value={this.state.genre} onChange={(event)=>this.handleChange(event,'genre')}>
                <option disabled>Genre</option>
                {this.populateGenre()}
              </select>
            </div>
            <div className="inputRowItem">
              <label>
                Release Date:
                <input type='date' value={this.state.date} onChange={(event)=>this.handleChange(event,'date')}/>
              </label>
            </div>
            <div className="inputRowItem">
              <input className="in-runtime" type='number' placeholder='Duration (in minutes)' value={this.state.runtime} onChange={(event)=>this.handleChange(event,'runtime')}/>
            </div>
          </div>
          <button>Submit</button>
        </form>
        <h2>Movies</h2>
        <div className="cardBox">
          {this.populateCardBox()}
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({
  genreList: reduxState.genreReducer,
  movieList: reduxState.movieReducer
}))(AddEntry);