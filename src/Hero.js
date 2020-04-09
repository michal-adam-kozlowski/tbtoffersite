import React from 'react';
import './Hero.scss';


class Hero extends React.Component {

  state = {
    destination: ["Czarnogóra", "Chorwacja", "Baleary", "Grecja"]
  }

  render() {
    return (

      <header className="heroComponent">
      <h1 className="heroTitle">{this.state.destination[1]}</h1>
      </header>
   )
  };
};

export default Hero;
