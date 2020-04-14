import React from 'react';
import './PopUp.scss';


class Popup extends React.Component {

  render() {
return (
<div className="popup">
<div className="popupInner">
<h1>{this.props.text.name}</h1>
<button onClick={this.props.closePopup}>X</button>
</div>
</div>
);
}
}

export default Popup;
