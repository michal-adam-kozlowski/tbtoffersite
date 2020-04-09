import React, { Component } from "react";
import './Tag.scss';


class Tag extends Component {

    render () {

        return <div className="single-tag">

         <i class={this.props.singleTag.class}></i>
         <div className="tag-text-box">
         <p className="tag-title">{this.props.singleTag.tagTitle}</p>
         <p className="tag-text">{this.props.singleTag.text} </p>
         </div>
         </div>
    }
}



export default Tag;

 // <img src={this.props.singleTag.image} alt={"tag"} />
