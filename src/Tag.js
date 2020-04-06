import React, { Component } from "react";
import './Tag.scss';


class Tag extends Component {

    render () {

        return <div className="single-tag">
         <img src={this.props.singleTag.image} alt={"tag"} />
         <p className="tag-text">{this.props.singleTag.text}</p>
           </div>
    }
}

export default Tag;
