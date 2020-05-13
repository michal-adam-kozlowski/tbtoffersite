// import React from 'react';
// import "./CheckPrice.scss";
// import $ from 'jquery';

// export class CheckPriceYacht extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }
//   componentDidMount = () => {

//     $(".checkPriceYacht").on("keyup", ".quantity", function () {
//       var priceYacht = +$(".price").data("price");
//       var quantity = $(this).val();
//       var fundusz = 10;
//       $("#totalYacht").text((priceYacht + fundusz) * quantity + " PLN");
//     })
//   }

//   render() {
//     return (
//       <div className="checkPriceYacht" >
//         <h4 className="title">{this.props.bookOpt.title.titleYacht}</h4>
//         <p className="price" data-price={this.props.bookOpt.price}>Cena za osobę: {this.props.bookOpt.price} PLN</p>
//         <p >Fundusz turystyczny: 10 PLN</p>
//         <p className="description">Liczba osób:</p>
//         <input type="text" className="quantity" ></input>
//         <p className="total">Łączna cena rezerwacji: <br></br> <span id="totalYacht"> {this.props.bookOpt.price + 10} PLN</span></p>
//         <button className="btn">Przejdź do rezerwacji</button>
//       </div>
//     )
//   } 
// }       
      

// export default CheckPriceYacht






