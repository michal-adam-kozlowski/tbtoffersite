import React, { Component } from 'react';
import YachtsPopup from './YachtsPopUp.js';
import "./YachtsPopUp.scss";

class YachtsPopUpContent extends Component {

  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });

  }

  render(props) {

    return (
      <div className="popUpContent">
        <div className="popUpBox" onClick={this.togglePopup.bind(this)}></div>
        {this.state.showPopup ? <YachtsPopup content={this.props.content} closePopup={this.togglePopup.bind(this)} /> : null}

      </div>

    );
  }
}

export default YachtsPopUpContent;
