import React from 'react';
import "./CheckPrice.scss";

class CheckPriceCabin extends React.Component {

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
                <button id="choose" onClick={this.handleClick}>
                    <a href="#popOver">Sprawdź cenę</a>
                </button>
                {this.state.popupVisible && (
                    <div id="popOver" className="popover">
                        <div className="checkPriceWrapper" id="checkPriceWrapper" >
                            <div className="checkPriceCabin">
                                <h4 className="title">{this.props.content.title.titleCabin}</h4>
                                <p className="price">Cena za osobę: {this.props.content.price} PLN</p>
                                <p >Fundusz turystyczny: 10 PLN</p>
                                <p className="description">Liczba osób: 2</p>
                                <p className="total">Łączna cena rezerwacji: <br></br> <span id="total"> {(this.props.content.price + 10) * 2} PLN</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceCabin