import React, { Component } from "react";
import './TagTravel.scss';


class TagTravel extends Component {

    render() {

        return <div className="singleTagTravel">
            <div className="iconTravel"><i class={this.props.singleTag.class}></i></div>
            <div className="tagTextBox">
                <p className="tagTitle">{this.props.singleTag.tagTitle}<span>{this.props.singleTag.title}</span></p>
                <p className="tagText">{this.props.singleTag.text} </p>
            </div>
        </div>
    }
}

export default TagTravel;
