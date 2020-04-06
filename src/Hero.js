import React from 'react';
import './Hero.scss';


class Hero extends React.Component {

  state = {
    destination: ["Czarnogóra", "Chorwacja", "Baleary", "Grecja"]
  }

  render() {
    return (
      <header className="hero-component">
      <h1 className="hero-title">{this.state.destination[1]}</h1>
      </header> )
  };
};

export default Hero;
