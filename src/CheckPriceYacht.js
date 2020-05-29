import React from 'react';
import "./CheckPrice.scss";
import $ from "jquery";
import Accordion from "./PayAccordion.js";

class CheckPriceYacht extends React.Component {

    constructor() {
        super();

        this.handleChoose = this.handleChoose.bind(this);
        

        this.state = {
            visibleYes: true,
            visibleNo: false
        };
    }

    handleChoose() {

        this.setState(prevState => ({
            visibleNo: !prevState.visibleNo,
            visibleYes: !prevState.visibleYes,
        }));

    }


    

    componentDidMount = () => {

        $(".checkPriceYacht").on("keyup", ".quantity", function () {
            var priceYacht = $(".price").data("price");
            var quantity = $(this).val() - 1;
            var fund = 10;

            if (quantity > 11 || quantity < 6) {
                document.getElementById("demo").innerHTML = "Rezerwacja całego jachtu możliwa jest dla grupy od 7 do 12 osób";
                $("#firstPayment").text(" ? PLN");
                $("#secondPayment").text(" ? PLN");
                $("#thirdPayment").text(" ? PLN");
                $("#totalYacht").text(" ? PLN");
                $("#quantity3").text(" ? ");
            } else {
                document.getElementById("demo").innerHTML = " ";
                $("#firstPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#secondPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
                $("#thirdPayment").text(((priceYacht + fund) * quantity) * 0.4 + " PLN");
                $("#totalYacht").text((priceYacht + fund) * quantity + " PLN");
                $("#quantity3").text(quantity);
            }

    

        })

        $(".checkPriceYacht").on("keyup", ".quantity2", function () {
            var priceYacht2 = $(".price").data("price");
            var quantity2 = $(this).val();
            var fund = 10;

            if (quantity2 > 12 || quantity2 < 7) {
                document.getElementById("demo2").innerHTML = "rezerwacja całego jachtu możliwa jest dla grupy od 7 do 12 osób";
                $("#firstPayment2").text("? PLN");
                $("#secondPayment2").text("? PLN");
                $("#thirdPayment2").text("? PLN");
                $("#totalYacht2").text("? PLN");
                $("#quantity4").text(quantity2);
            } else {
                document.getElementById("demo2").innerHTML = " ";
                $("#firstPayment2").text(((priceYacht2 + fund) * quantity2) * 0.3 + " PLN");
                $("#secondPayment2").text(((priceYacht2 + fund) * quantity2) * 0.3 + " PLN");
                $("#thirdPayment2").text(((priceYacht2 + fund) * quantity2) * 0.4 + " PLN");
                $("#totalYacht2").text((priceYacht2 + fund) * quantity2 + " PLN");
                $("#quantity4").text(quantity2);
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
                <div>
                    <label class="radio">
                        <input name="test" type="radio" value="yes" defaultChecked onChange={this.handleChoose} />
                            TAK
                    </label>
                    <label class="radio">
                        <input name="test" type="radio" value="no" onChange={this.handleChoose} />
                            NIE (mamy swojego skippera)
                    </label>
                </div>
                {this.state.visibleYes && (
                    <>
                    <p className="addInfo2">Liczba osób zostanie pomniejszona o 1</p>
                    <p className="description">Wpisz liczbę osób: <input type="text" className="quantity" ></input></p>
                    <p id="demo"></p>
                    <p className="firstPayment">Pierwsza rata: <span id="firstPayment"> ? PLN </span></p>
                    <p className="secondPayment">Druga rata: <span id="secondPayment"> ? PLN </span></p>
                    <p className="thirdPayment">Trzecia rata: <span id="thirdPayment"> ? PLN </span></p>
                    <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht"> ? PLN </span></p>
                    <p>Ostateczna liczba osób: <span id="quantity3"> ? </span></p>
               </> )}
               {this.state.visibleNo && (
                    <>
                    
                    <p className="description">Wpisz liczbę osób: <input type="text" className="quantity2" ></input></p>
                    <p id="demo2"></p>
                    <p className="firstPayment">Pierwsza rata: <span id="firstPayment2"> ? PLN </span></p>
                    <p className="secondPayment">Druga rata: <span id="secondPayment2"> ? PLN </span></p>
                    <p className="thirdPayment">Trzecia rata: <span id="thirdPayment2"> ? PLN </span></p>
                    <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht2">? PLN</span></p>
                    <p>Ostateczna liczba osób: <span id="quantity4"> ? </span></p>
               </> )}
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
                    <a href="#bottom" onClick={this.handleClick}> Sprawdź cenę</a>
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



