import React, { Component } from "react";
import "./BookOptions.scss";
import "./Yachts.scss";
import "./YachtsPopUp.scss";

// window.onload = function() {
  
//   let btnCheck = document.getElementById("btnCheck");
//   btnCheck.addEventListener("click", function() {
//   return <PopoverY style={{display: 'block'}} />
// })
// }


class Yachts extends Component {

  render() {
    return (
      <div className="classBoxSingle">
        <div className="imageYacht"><img src={(this.props.textComponent.image)} alt={""} /></div>
        <div className="textComponent">
          <h3>{this.props.textComponent.name} / od {this.props.textComponent.price} PLN </h3>

          <h4>Liczba miejsc</h4>
          <p>{this.props.textComponent.person}</p>
          <h4>Rocznik jachtu</h4>
          <p>{this.props.textComponent.year}</p>
          <h4>Udogodnienia</h4>
          <ul>
            <li>{this.props.textComponent.amenities.first}</li>
            <li>{this.props.textComponent.amenities.second}</li>
            <li>{this.props.textComponent.amenities.third}</li>
          </ul>
          {/* <div id="buttonCheck" ><button id="btnCheck"><a href="#bookOptions">Oblicz cenę</a></button></div> */}
          
        </div>
      </div>
    )
  }
};
export default Yachts;
