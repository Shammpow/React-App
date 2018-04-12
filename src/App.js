import React, { Component } from 'react';
import images from "./images.json";
import ImageCard from "./components/ImageCard"
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    images
  }

  doThis = () => {
    this.setState({ score: this.state.score + 1})
  }

  // emptyScore = () => {
  //   // eslint-disable-next-line
  //   this.setState({ score: this.state.score = 0 })
  // }
  render() {
    return (
      <div>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Clicky Game</a>
            <span id="instructions" className="nav-item">Click an image to begin! </span>
            <span id="score" className="nav-item">Score: {this.state.score} | Top Score: {this.state.topScore} </span>
          </nav>
        </div>
        <div>
          <Wrapper>
            {/* Couldn't figure out how to randomize them repeatedly... */}
            {this.state.images.map(images => (
              <ImageCard
              doThis={this.doThis}
              id={images.id}
              image={images.image}
              name={images.name}
              />
            ))}
          </Wrapper>
        </div>
        {/* Button was used for testing */}
        {/* <button className="btn btn-danger" onClick={this.emptyScore}>
          Empty Me
        </button> */}


      </div>
    );
  }
}

export default App;
