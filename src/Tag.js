import React, { Component } from "react";
import './Tag.scss';


class Tag extends Component {

    render () {

        return <div className="singleTag">

         <i class={this.props.singleTag.class}></i>
         <div className="tagTextBox">
         <p className="tagTitle">{this.props.singleTag.tagTitle}</p>
         <p className="tagText">{this.props.singleTag.text} </p>
         </div>
         </div>
    }
}

export default Tag;

 // <img src={this.props.singleTag.image} alt={"tag"} />
