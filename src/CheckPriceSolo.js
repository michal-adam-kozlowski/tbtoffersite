
import React from 'react';
import "./CheckPrice.scss";
import $ from "jquery";

class CheckPriceSolo extends React.Component {

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

        $(".checkPriceSolo").on("keyup", ".quantity", function () {
            var priceSolo = +$(".price").data("price");
            var quantity = $(this).val();
            var fund = 10;
            $("#firstPaymentSolo").text(((priceSolo + fund) * quantity) * 0.3 + " PLN");
            $("#secondPaymentSolo").text(((priceSolo + fund) * quantity) * 0.3 + " PLN");
            $("#thirdPaymentSolo").text(((priceSolo + fund) * quantity) * 0.4 + " PLN");
            $("#totalSolo").text((priceSolo + fund) * quantity + " PLN");
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
                            <div className="checkPriceSolo">
                                <h4 className="title">{this.props.content.title.titleSolo}</h4>
                                <p className="price" data-price={this.props.content.price}>Cena za osobę: {this.props.content.price} PLN</p>
                                <p>Fundusz turystyczny: 10 PLN</p>
                                <p className="description">Liczba osób:</p>
                                <input type="text" className="quantity" ></input>
                                <p className="firstPayment">Pierwsza rata <br></br> <span id="firstPaymentSolo"> ... PLN </span></p>
                                <p className="secondPayment">Druga rata <br></br> <span id="secondPaymentSolo"> ... PLN </span></p>
                                <p className="thirdPayment">Trzecia rata <br></br> <span id="thirdPaymentSolo"> ... PLN </span></p>
                                <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalSolo">{this.props.content.price + 10} PLN</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceSolo





