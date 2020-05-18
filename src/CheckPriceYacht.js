import React from 'react';
import "./CheckPrice.scss";
import $ from "jquery";
import Accordion from "./PayAccordion.js";

class CheckPriceYacht extends React.Component {

    componentDidMount = () => {

        $(".checkPriceYacht").on("keyup", ".quantity", function () {
            var priceYacht = $(".price").data("price");
            var quantity = $(this).val();
            var fund = 10;
        
            if (quantity > 12 || quantity < 7) {
                document.getElementById("demo").innerHTML = "rezerwacja całego jachtu możliwa jest dla grupy od 7 do 12 osób";
                $("#firstPayment").text(" PLN");
                $("#secondPayment").text(" PLN");
                $("#thirdPayment").text(" PLN");
                $("#totalYacht").text(" PLN");
            } else {
                document.getElementById("demo").innerHTML = " ";
                $("#firstPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#secondPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#thirdPayment").text(((priceYacht + fund) * quantity) * 0.4 + " PLN");
                $("#totalYacht").text((priceYacht + fund) * quantity + " PLN");
            }

        })
    }

    render() {

        return (
            <div className="checkPriceYacht" >
                <h4 className="title">{this.props.content.title.titleYacht}</h4>
                <p className="price" data-price={this.props.content.price}>Cena za osobę: {this.props.content.price} PLN</p>
                <p>Fundusz turystyczny: 10 PLN/osoba</p>
                <p className="description">Wpisz liczbę osób:</p>
                <input type="text" className="quantity" ></input>
                <p id="demo"></p>
                <p className="firstPayment">Pierwsza rata: <span id="firstPayment"> ... PLN </span></p>
                <p className="secondPayment">Druga rata: <span id="secondPayment"> ... PLN </span></p>
                <p className="thirdPayment">Trzecia rata: <span id="thirdPayment"> ... PLN </span></p>
                <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht"> .. PLN</span></p>
            </div>
        );
    }
}
class CheckPriceYachtWrapper extends React.Component {

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
                            <CheckPriceYacht content={this.props.content} />
                            <Accordion />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}


export default CheckPriceYachtWrapper



