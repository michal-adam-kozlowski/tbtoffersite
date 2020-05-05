import React from "react";
import "./BookOptions.scss";

class BookOptions extends React.Component {
  render() {
    return (
      <div className="bookOptionsComponent">
        <div className="tabImage"><i class={this.props.book.icon}></i></div>
        <div className="tabText"><h4>{this.props.book.name}</h4>
          <p>{this.props.book.info}</p>
        </div>
      </div>
    );
  }
}

export default BookOptions
