import React, { Component } from "react";
import './Tag.scss';

class Tag extends Component {
    render () {
        return (
        <div className="singleTag">
         <div className="iconTravel"><i class={this.props.class}></i></div>
           <div className="tagTextBox">
             <p className="tagTitle">{this.props.tagTitle}</p>
             <p className="tagText">{this.props.text} </p>
           </div>
        </div>
       )
    };
};

export default Tag;
