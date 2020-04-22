import React from 'react';
import './ShortInfo.scss';

class ShortInfo extends React.Component {
  render() {
    return (
      <div className="shortInfoBox">
        <h2 className="shortInfoTitle">{this.props.info.titleCroatia}</h2>
          <p className="shortInfoText">{this.props.info.textCroatia}</p>
      </div>
    )
  }
}
export default ShortInfo;
