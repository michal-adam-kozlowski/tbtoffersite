import React, {Component} from "react";
import "./Testimonial.scss";


class Testimonial extends Component {
    render () {
        return (
            <div>
                <img src={require(`${this.props.image}`)} alt={""} className='testimonialImage'/>
                <h1 className='testimonialName'>{this.props.name}</h1>
                <p className='testimonialText'>{this.props.text}</p>
            </div>
        );
    }
}

export default Testimonial;
