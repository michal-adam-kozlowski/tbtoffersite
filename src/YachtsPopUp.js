import React from 'react';
import './YachtsPopUp.scss';
import "./YachtsPopUpInSlider.scss";
import CheckPriceSoloWrapper from "./CheckPriceSolo.js";
import CheckPriceYachtWrapper from "./CheckPriceYacht.js";
import CheckPriceCabinWrapper from "./CheckPriceCabin.js";
import { bookArr, Tabs } from "./BookOptionsWrapper.js"
import BookOptions from "./BookOptions.js";
import $ from "jquery";


class YachtsPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount = () => {

    $(function () {
      $('.scroll-down').click(function () {
        $('html,body,.popupInner').animate({ scrollTop: $('div.infoContent').offset().top }, 'slow');
        return false;
      });
    });




  }
  render() {
    return (
      <div className="popUpComponent">
        <div className="popUp" onClick={this.props.closePopup}></div>
        <div className="popupInner">
          <h1>{this.props.content.name2}</h1>
          <section className="slideshow">
            <span id="target-1"></span>
            <span id="target-2"></span>
            <span id="target-3"></span>
            <span id="target-4"></span>
            <div className="slideshow-item item1">
              <div className="progress">1 of 4</div>
              <img className="imgDeck" src={this.props.content.gallery.fourth} alt="" />
              <a href="#target-4" className="arrow arrow-prev"> </a>
              <a href="#target-2" className="arrow arrow-next"> </a>
            </div>
            <div className="slideshow-item item2">
              <div className="progress">2 of 4</div>
              <img src={this.props.content.gallery.first} alt="" />
              <a href="#target-1" className="arrow arrow-prev"> </a>
              <a href="#target-3" className="arrow arrow-next"> </a>
            </div>
            <div className="slideshow-item item3">
              <div className="progress">3 of 4</div>
              <img src={this.props.content.gallery.second} alt="" />
              <a href="#target-2" className="arrow arrow-prev"> </a>
              <a href="#target-4" className="arrow arrow-next"> </a>
            </div>
            <div className="slideshow-item item4">
              <div className="progress">4 of 4</div>
              <img src={this.props.content.gallery.third} alt="" />
              <a href="#target-3" className="arrow arrow-prev"> </a>
              <a href="#target-1" className="arrow arrow-next"> </a>
            </div>


          </section>

          <section id="scrollDown">
            <div className="checkText">Oblicz cenę 
            <div className="scrollDownBox"><a href=".infoContent" className="scroll-down" address="true"> </a></div></div>
          </section>
          <div className="infoContent"><p>{this.props.content.info}</p>
            <p><strong>{this.props.content.info1Title}</strong></p>
            <p>{this.props.content.info1}</p>
            <p><strong>{this.props.content.info2Title}</strong>{this.props.content.info2}</p>
            <p><strong>{this.props.content.info3Title}</strong>{this.props.content.info3}</p>
            <p><strong>{this.props.content.info4Title}</strong>{this.props.content.info4}</p>
            <p className="bookText">Wybierz jednostkę</p>

            <div className="tabsMenu" id="bookOptions">
              <div className="titleReservations" >
                <div className="numberBox">
                  <p className="numberText">2</p>
                </div>
                <h3>Wybierz jedną z opcji rezerwacji</h3>
              </div>
              <Tabs>
                <div title="Jacht">
                  <BookOptions book={bookArr[0]} />
                  <CheckPriceYachtWrapper content={this.props.content} />
                </div>
                <div title="Kabina">
                  <BookOptions book={bookArr[1]} />
                  <CheckPriceCabinWrapper content={this.props.content} />
                </div>
                <div title="Solo">
                  <BookOptions book={bookArr[2]} />
                  <CheckPriceSoloWrapper content={this.props.content} />
                </div>
              </Tabs>
              <div id="bottom"></div>
            </div>

          </div>
          <button id="close" onClick={this.props.closePopup}><i className="fas fa-times"></i></button>
        </div>
      </div>
    );
  }
}

export default YachtsPopup;
