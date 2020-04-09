import React, { Component } from "react";
import "./Tab.scss";
import "./Yachts.scss";


class YachtDescription extends Component {

    render () {

        return (

         <div className="class-box">
         <div>
         <div className="image-yacht"><img src={(this.props.textComponent.image)} alt={("this.props.firstGap.name")} /></div>
         <div className="text-component">
         <h3>{this.props.textComponent.name}</h3>
         <p>{this.props.textComponent.price}/osoba</p>
         <h4>Liczba miejsc</h4>
         <p>{this.props.textComponent.person}</p>
         <h4>Rocznik jachtu</h4>
         <p>{this.props.textComponent.year}</p>
         <h4>Udogodnienia</h4>
         <ul>
         <li>{this.props.textComponent.amenities[0]}</li>
         <li>{this.props.textComponent.amenities[1]}</li>
         <li>{this.props.textComponent.amenities[2]}</li>
         </ul>
          <h4>Krótki opis</h4>
         <p>{this.props.textComponent.shortInfo}</p>

         </div>
         </div>
         </div>)

    }
};


export default YachtDescription;

 // <li style={{fontWeight: 600}}>{this.props.textComponent.amenities[3]}</li>
