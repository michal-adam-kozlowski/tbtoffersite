import React from 'react';
import './TagInfo.scss';


class TagInfo extends React.Component {
  render() {
    return (
        <div className="tagInfoComponent" title={this.props.singleTag.name}>
          <i class={this.props.singleTag.temperature}></i> <i class={this.props.singleTag.class}></i> <p> {this.props.singleTag.text} </p>
        </div>
    )
  };
};

export default TagInfo;
