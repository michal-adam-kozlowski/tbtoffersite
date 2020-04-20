import React from 'react';
import './PopUp.scss';


class Popup extends React.Component {
  render() {
    return (
      <div className="popup" onClick={this.props.closePopup}>
        <div className="popupInner" >
           <h1>{this.props.content.name2}</h1>
          <div className="infoContent"><p>{this.props.content.info}</p>
            <p>{this.props.content.info1}</p>
            <p>{this.props.content.info2}</p>
            <p>{this.props.content.info3}</p>
            <p>{this.props.content.info4}</p>
        </div>
        <div className="imageBox">{this.props.content.gallery}</div>
        <button onClick={this.props.closePopup}><i class="fas fa-times"></i></button>
        </div>
       </div>
     );
  }
}

export default Popup;
