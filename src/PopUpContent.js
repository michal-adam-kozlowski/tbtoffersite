import React, { Component } from 'react';
import Popup from './PopUp.js';
import "./PopUp.scss";
// import PopupDescription from './PopupDescription.js'



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

  render(props) {

return (
<div className="popUpContent">
<div className="popUpBox" onClick={this.togglePopup.bind(this)}></div>

{this.state.showPopup ? <Popup content={this.props.content} closePopup={this.togglePopup.bind(this)}/> : null}
</div>

);
}
}

export default PopUpContent;
