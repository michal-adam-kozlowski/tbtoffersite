import React, { Component } from "react";
import './TagTravel.scss';


class TagTravel extends Component {

    render () {

        return <div className="singleTagTravel">
          <i class={this.props.singleTag.class}></i>
         <div className="tagTextBox">
         <p className="tagTitle">{this.props.singleTag.tagTitle}</p>
         <p className="tagText">{this.props.singleTag.text} </p>
         </div>
         </div>
    }
}



export default TagTravel;
