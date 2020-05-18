import React from 'react';
import "./CheckPrice.scss";

class CheckPriceCabin extends React.Component {

    render() {

        return (
            <div className="checkPriceCabin">
                <h4 className="title">{this.props.content.title.titleCabin}</h4>
                <p className="price">Cena za osobę: {this.props.content.price} PLN</p>
                <p >Fundusz turystyczny: 10 PLN</p>
                <p className="description">Liczba osób: 2</p>
                <p className="total">Łączna cena rezerwacji: <br></br> <span id="total"> {(this.props.content.price + 10) * 2} PLN</span></p>
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
                <button id="choose" onClick={this.handleClick} href="#popOver">
                    Sprawdź cenę
                </button>
                {this.state.popupVisible && (
                    <div id="popOver" className="popover">
                        <div className="checkPriceWrapper" id="checkPriceWrapper" >
                            <CheckPriceCabin content={this.props.content} />
                            <button ><a href="#payment" onClick={this.props.closePopup}>Sprawdz system płatności</a></button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceCabinWrapper