import React from 'react';
import './PopUp.scss';


class Popup extends React.Component {

  render() {
return (
<div className="popup">
<div className="popupInner">
<h1>{this.props.content.name}</h1>
<div className="infoComtent">{this.props.content.info}
</div>
<div className="imageBox">{this.props.content.gallery}</div>
<button onClick={this.props.closePopup}>X</button>
</div>
</div>
);
}
}

export default Popup;
