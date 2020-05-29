import React from 'react';
import "./CheckPrice.scss";
import Accordion from "./PayAccordion.js";

class CheckPriceCabin extends React.Component {

    render() {

        return (
         
                <div className="checkPriceCabin">
                    <h4 className="title">{this.props.content.title.titleCabin}</h4>
                    <p className="price">Cena za osobę: {this.props.content.price} PLN</p>
                    <p className="price">Cena za kabinę: {this.props.content.price * 2} PLN</p>
                    <p >Fundusz turystyczny: 10 PLN/osoba</p>
                    <p className="description">Liczba osób: 2</p>
                    <p className="firstPayment">Pierwsza rata: <span id="firstPaymentCabin"> {(this.props.content.price * 2 + 20) * 0.3} PLN </span></p>
                    <p className="secondPayment">Druga rata: <span id="secondPaymentCabin"> {(this.props.content.price * 2 + 20) * 0.3} PLN </span></p>
                    <p className="thirdPayment">Trzecia rata: <span id="thirdPaymentCabin"> {(this.props.content.price * 2 + 20) * 0.4} PLN </span></p>
                    <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalCabin"> {((this.props.content.price * 2 + 20))} PLN </span></p>
                </div>
         
        );
    }
}
class CheckPriceCabinWrapper extends React.Component {

    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            popupVisible: false,
        };
    }

    handleClick() {


        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    render() {

        return (
            <div className="popover-container" ref={node => { this.node = node; }}>
                <button className="choose">
                    <a href="#bottom" onClick={this.handleClick}> Oblicz cenę</a>
                </button>
                {this.state.popupVisible && (
                    <div id="popOver" className="popover">
                        <div className="checkPriceWrapper" id="checkPriceWrapper" >
                            <CheckPriceCabin content={this.props.content} />
                            <Accordion />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceCabinWrapper