import React from 'react';
import './PopUp.scss';
import "./PopUpInSlider.scss"

class Popup extends React.Component {
  render() {
    return (
      <div className="popUpComponent">
      <div className="popUp" onClick={this.props.closePopup}></div>
        <div className="popupInner">
           <h1>{this.props.content.name2}</h1>
           <section class="slideshow">
      <span id="target-1"></span>
      <span id="target-2"></span>
      <span id="target-3"></span>
      <span id="target-4"></span>
      <div class="slideshow-item item1">
        <div class="progress">1 of 4</div>
        <img className="imgDeck" src={this.props.content.gallery[3]} alt="" />
        <a href="#target-4" class="arrow arrow-prev"> </a>
        <a href="#target-2" class="arrow arrow-next"> </a>
      </div>

      <div class="slideshow-item item2">
        <div class="progress">2 of 4</div>
        <img src={this.props.content.gallery[1]} alt="" />
        <a href="#target-1" class="arrow arrow-prev"> </a>
        <a href="#target-3" class="arrow arrow-next"> </a>
      </div>

      <div class="slideshow-item item3">
        <div class="progress">3 of 4</div>
        <img src={this.props.content.gallery[2]} alt="" />
        <a href="#target-2" class="arrow arrow-prev"> </a>
        <a href="#target-4" class="arrow arrow-next"> </a>
      </div>
      <div class="slideshow-item item4">
        <div class="progress">4 of 4</div>
        <img src={this.props.content.gallery[0]} alt="" />
        <a href="#target-3" class="arrow arrow-prev"> </a>
        <a href="#target-1" class="arrow arrow-next"> </a>
      </div>
          </section>

          <div className="infoContent"><p>{this.props.content.info}</p>
            <p><strong>{this.props.content.info1Title}</strong></p>
            <p>{this.props.content.info1}</p>
            <p><strong>{this.props.content.info2Title}</strong> {this.props.content.info2}</p>
            <p><strong>{this.props.content.info3Title}</strong> {this.props.content.info3}</p>
            <p><strong>{this.props.content.info4Title}</strong>{this.props.content.info4}</p>
        </div>
        <button onClick={this.props.closePopup}><i class="fas fa-times"></i></button>
        </div>
       </div>

     );
  }

  }

export default Popup;
