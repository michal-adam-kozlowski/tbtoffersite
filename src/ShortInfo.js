import React from 'react';
import './ShortInfo.scss';
import TagInfoWrapper from "./TagInfoWrapper.js"

class ShortInfo extends React.Component {
  render() {
    return (
      <div className="shortInfoBox">
        <h2 className="shortInfoTitle">{this.props.info.titleCroatia}</h2>
        <TagInfoWrapper />
          <p className="shortInfoText">{this.props.info.textCroatia}</p>
      </div>
    )
  }
}
export default ShortInfo;
