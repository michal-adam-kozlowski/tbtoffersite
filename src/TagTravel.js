import React, { Component } from "react";
import './TagTravel.scss';


class TagTravel extends Component {

    render () {

        return <div className="single-tag-travel">
         <img src={this.props.singleTag.image} alt={"tag"} />
         <div className="tag-text-box">
         <p className="tag-title">{this.props.singleTag.tagTitle}</p>
         <p className="tag-text">{this.props.singleTag.text} </p>
         </div>
         </div>
    }
}



export default TagTravel;
