import React, { Component } from 'react';
import YachtDescription from './YachtDescription.js';
import Popup from './PopUp.js';
import "./PopUp.scss";


class PopUpContent extends Component {

  constructor(props){
super(props);
this.state = { showPopup: false };
}

  togglePopup() {
this.setState({
     showPopup: !this.state.showPopup
});
 }

  render() {
return (
<div className="popUpContent">
<div className="popUpBox" onClick={this.togglePopup.bind(this)}></div>

{this.state.showPopup ?
<Popup
          text='jakiś tekst'
          closePopup={this.togglePopup.bind(this)}
/>
: null
}
</div>

);
}
}

export default PopUpContent;
