import React from 'react';
import "./CheckPrice.scss";
import Accordion from "./PayAccordion.js";
import $ from "jquery";

class AddSkipper extends React.Component {

    componentDidMount = () => {
        $("#submitBtn").click(function (e) {
            e.preventDefault()
            $('.quantity').prop('disabled', true);
            $('#amountOfPayments').css('display', 'block');

        });
    }

    render() {
        return (
            <>
                <p className="addInfo2">Liczba osób zostanie pomniejszona o 1</p>
                <p className="description">Wpisz liczbę osób: <input type="text" className="quantity" ></input></p>
                <p id="infoCrew"></p>
                <button id="submitBtn" type="submit">Potwierdź</button>
                <div id="amountOfPayments">
                    <p className="firstPayment">Pierwsza rata: <span id="firstPayment">0 PLN </span></p>
                    <p className="secondPayment">Druga rata: <span id="secondPayment"> 0 PLN </span></p>
                    <p className="thirdPayment">Trzecia rata: <span id="thirdPayment">0 PLN  </span></p>
                    <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht">  </span></p>
                    <p>Ostateczna liczba osób: <span id="finalNumber1">  </span></p>
                </div>
            </>
        )
    }
}

class WithoutSkipper extends React.Component {

    componentDidMount = () => {
        $("#submitBtn2").click(function (event) {
            event.preventDefault()
            $('.quantity2').prop('disabled', true);
            $('#amountOfPayments2').css('display', 'block');

        });
    }

    render() {
        return (
            <>
                <p className="description">Wpisz liczbę osób: <input type="text" className="quantity2" ></input></p>
                <p id="infoCrew2"></p>
                <button id="submitBtn2" type="submit">Potwierdź</button>
                <div id="amountOfPayments2">
                    <p className="firstPayment">Pierwsza rata: <span id="firstPayment2">0 PLN </span></p>
                    <p className="secondPayment">Druga rata: <span id="secondPayment2"> 0 PLN </span></p>
                    <p className="thirdPayment">Trzecia rata: <span id="thirdPayment2"> 0 PLN </span></p>
                    <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht2">0 PLN </span></p>
                    <p>Ostateczna liczba osób: <span id="finalNumber2"> 0 </span></p>
                </div>
            </>
        )
    }
}
class CheckPriceYacht extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isConfirmedYes: false,
            isConfirmedNo: false,
            isFormSubmited: false,
        };
    }

    handleChangeY = () => {

        this.setState(prevState => ({
            isConfirmedYes: !prevState.isConfirmedYes,
            isConfirmedNo: false,
            isFormSubmited: false
        }));

    }

    handleChangeN = () => {

        this.setState(prevState => ({
            isConfirmedYes: false,
            isConfirmedNo: !prevState.isConfirmedNo,
            isFormSubmited: false
        }));

    }

    displayMessage = () => {

        if (this.state.isFormSubmited) {
            if (this.state.isConfirmedYes) {
                return <AddSkipper />
            } else if (this.state.isConfirmedNo) {
                return <WithoutSkipper />
            }
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        if (!this.state.isFormSubmited) {
            this.setState({
                isFormSubmited: true
            })
        }
    }


    componentDidMount = () => {

        $(".checkPriceYacht").on("keyup", ".quantity", function () {
            var priceYacht = $(".price").data("price");
            var quantity = $(this).val() - 1;
            var fund = 10;

            if (quantity > 11 || quantity < 6) {
                document.getElementById("infoCrew").innerHTML = "Rezerwacja całego jachtu możliwa jest dla grupy od 7 do 12 osób";
                $("#submitBtn").prop("disabled", true)
            } else {
                document.getElementById("infoCrew").innerHTML = " ";
                $("#firstPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#secondPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#thirdPayment").text(((priceYacht + fund) * quantity) * 0.4 + " PLN");
                $("#totalYacht").text((priceYacht + fund) * quantity + " PLN");
                $("#finalNumber1").text(quantity);
                $("#submitBtn").prop("disabled", false)
            }
        })

        $(".checkPriceYacht").on("keyup", ".quantity2", function () {
            var priceYacht2 = $(".price").data("price");
            var quantity2 = $(this).val();
            var fund = 10;

            if (quantity2 > 12 || quantity2 < 7) {
                document.getElementById("infoCrew2").innerHTML = "rezerwacja całego jachtu możliwa jest dla grupy od 7 do 12 osób";
                $("#submitBtn2").prop("disabled", true)
            } else {
                document.getElementById("infoCrew2").innerHTML = " ";
                $("#firstPayment2").text(((priceYacht2 + fund) * quantity2) * 0.3 + " PLN");
                $("#secondPayment2").text(((priceYacht2 + fund) * quantity2) * 0.3 + " PLN");
                $("#thirdPayment2").text(((priceYacht2 + fund) * quantity2) * 0.4 + " PLN");
                $("#totalYacht2").text((priceYacht2 + fund) * quantity2 + " PLN");
                $("#finalNumber2").text(quantity2);
                $("#submitBtn2").prop("disabled", false)

            }



        })


        $("a[href='#bottom']").click(function () {
            $("#bottom").animate({ scrollTop: $(".popover-container").height() }, "slow");
            return false;
        });


    }

    render() {

        return (
            <div className="checkPriceYacht" >
                <h4 className="title">{this.props.content.title.titleYacht}</h4>
                <p className="price" data-price={this.props.content.price}>Cena za osobę: {this.props.content.price} PLN</p>
                <p>Fundusz turystyczny: 10 PLN/osoba</p>
                <p className="addInfo">Czy chcesz, żebyśmy zapewnili Ci skippera?</p>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="testyes">
                        <input id="testyes" name="test" type="radio" value="yes" checked={this.state.isConfirmedYes} onChange={this.handleChangeY} />
                            TAK
                    </label>
                    <label htmlFor="testno">
                        <input id="testno" name="test" type="radio" value="no" checked={this.state.isConfirmedNo} onChange={this.handleChangeN} />
                            NIE
                    </label>
                    <button type="submit">Potwierdź</button>
                </form>

                {this.displayMessage()}
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
                <button className="choose">
                    <a href="#bottom" onClick={this.handleClick}> Oblicz cenę</a>
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



