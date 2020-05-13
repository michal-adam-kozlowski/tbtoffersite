import React from "react";
import "./BookOptions.scss";

class BookOptions extends React.Component {

  render() {
    return (
      <div className="bookOptionsComponent">
        <div className="bookContent">
          <div className="tabImage"><i class={this.props.book.icon}></i></div>
          <div className="tabText"><h4>{this.props.book.name}</h4>
            <p>{this.props.book.info}</p>
          </div>
        </div>
        {/* <div className="buttonCheck" ><button><a href="#checkPriceYacht">Cena całego jachtu</a></button></div> */}
      </div>
    );
  }
}

export default BookOptions
