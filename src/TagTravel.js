import React, { Component } from "react";
import './TagTravel.scss';


class TagTravel extends Component {

    render() {

        return <div className="singleTagTravel">
            <div className="iconTravel"><i class={this.props.class}></i></div>
            <div className="tagTextBox">
                <p className="tagTitle">{this.props.tagTitle}<span>{this.props.title}</span></p>
                <p className="tagText">{this.props.text} </p>
            </div>
        </div>
    }
}

export default TagTravel;
