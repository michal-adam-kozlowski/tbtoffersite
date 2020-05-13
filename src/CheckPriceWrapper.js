import React from 'react';
import "./CheckPrice.scss";
import $ from "jquery";


export const checkYachtArr = [
  {
    price: 1590,
    title: {
      titleYacht: "Cały Jacht",
      titleCabin: "Kabina",
      titleSolo: "Solo"
    }
  },
  {
    price: 1790,
    title: {
      titleYacht: "Cały Jacht",
      titleCabin: "Kabina",
      titleSolo: "Solo"
    }
  },
  {
    price: 2090,
    title: {
      titleYacht: "Cały Jacht",
      titleCabin: "Kabina",
      titleSolo: "Solo"
    }
  },
  {
    price: 2090,
    title: {
      titleYacht: "Cały Jacht",
      titleCabin: "Kabina",
      titleSolo: "Solo"
    }
  },
  {
    price: 2290,
    title: {
      titleYacht: "Cały Jacht",
      titleCabin: "Kabina",
      titleSolo: "Solo"
    }
  }
]

class CheckPriceYacht extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount = () => {

    $(".checkPriceYacht").on("keyup", ".quantity", function () {
      var priceYacht = +$(".price").data("price");
      var quantity = $(this).val();
      var fund = 10;    
      if(quantity > 12) {
        return quantity} else {
        $(" ")  
        }
     
      $("#firstPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
      $("#secondPayment").text(((priceYacht + fund) * quantity) * 0.3 + " PLN");
      $("#thirdPayment").text(((priceYacht + fund) * quantity) * 0.4 + " PLN");
      $("#totalYacht").text((priceYacht + fund) * quantity + " PLN");

      
  
     
    })
  }

  render() {
    return (
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
    )
  }
}

class CheckPriceCabin extends React.Component {
  render() {
    return (
      <div className="checkPriceCabin">
        <h4 className="title">{this.props.content.title.titleCabin}</h4>
        <p className="price">Cena za osobę: {this.props.content.price} PLN</p>
        <p >Fundusz turystyczny: 10 PLN</p>
        <p className="description">Liczba osób: 2</p>
        <p className="total">Łączna cena rezerwacji: <br></br> <span id="total"> {(this.props.content.price + 10) * 2} PLN</span></p>
        {/* <button className="btn">Przejdź do rezerwacji</button> */}
      </div>
    )
  }
}

class CheckPriceSolo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
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
    )
  }
}

class CheckPriceWrapper extends React.Component {
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

   
  }

  render() {
    return (
      <div className="popover-container" ref={node => { this.node = node; }}>
        <button id="choose"  onClick={this.handleClick}>
            <a href="#popOver">Sprawdź cenę</a>
        </button>
          {this.state.popupVisible && (
            <div id="popOver" className="popover">
              <div className="checkPriceWrapper" id="checkPriceWrapper" >

                {/* {checkYacht1Arr.map((content) =>
             <CheckPriceSolo price={content.price} title={content.title.titleSolo} />)}  */}
                <CheckPriceYacht content={this.props.content} />
                <CheckPriceCabin content={this.props.content} />
                <CheckPriceSolo content={this.props.content} />
                
              </div>
          
            </div>
          )}
      </div>
    );
  }
}


export default CheckPriceWrapper





