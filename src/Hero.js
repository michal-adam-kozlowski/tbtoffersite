import React from 'react';
import './Hero.scss';
import { Player } from 'video-react';
import video from "./video/video-TBT.mp4";


class Hero extends React.Component {
  render() {
    return (
      <header className="heroComponent">
        <Player muted={true} autoPlay={true} loop={true} playsinline={true} >
          <source src={video} type="video/mp4" />
        </Player>
      </header>
    )
  };
};

export default Hero;
