import React from 'react';
import "./CheckPrice.scss";
import $ from "jquery";

class CheckPriceYacht extends React.Component {

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

    componentDidMount = () => {

        $(".checkPriceYacht").on("keyup", ".quantity", function () {
            var priceYacht = +$(".price").data("price");
            var quantity = $(this).val();
            var fund = 10;
            if (quantity > 12) {
                return $(quantity)
            }

            $("#firstPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
            $("#secondPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
            $("#thirdPayment").text(((priceYacht + fund) * quantity) * 0.4 + " PLN");
            $("#totalYacht").text((priceYacht + fund) * quantity + " PLN");
        })
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
                            <div className="checkPriceYacht" >
                                <h4 className="title">{this.props.content.title.titleYacht}</h4>
                                <p className="price" data-price={this.props.content.price}>Cena za osobę: {this.props.content.price} PLN</p>
                                <p>Fundusz turystyczny: 10 PLN</p>
                                <p className="description">Wpisz liczbę osób:</p>
                                <input type="text" className="quantity" ></input>
                                <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht"> .. PLN</span></p>
                                <p className="firstPayment">Pierwsza rata <br></br> <span id="firstPayment"> ... PLN </span></p>
                                <p className="secondPayment">Druga rata <br></br> <span id="secondPayment"> ... PLN </span></p>
                                <p className="thirdPayment">Trzecia rata <br></br> <span id="thirdPayment"> ... PLN </span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceYacht



