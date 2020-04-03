import React, { Component } from "react";
import './Tag.scss';


class Tag extends Component {
    render () {
        return <div>
         <img src={this.props.single.image} alt={"tag"} />
           </div>
    }
}

export default Tag;
