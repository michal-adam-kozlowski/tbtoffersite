import React from 'react';
import "./CheckPrice.scss";
import $ from 'jquery';
import {yachtsArr} from "./YachtsWrapper.js";

$(document).ready(function(){
	$(".checkPrice").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
        var quantity = +$(this).val();
        var fundusz = 10;
		$("#total").text((price + fundusz)* quantity + " PLN");
	})
})

class CheckPrice extends React.Component {
    render() {
        return (
            <div className="checkPrice">
                <h4 className="title">Cały jacht</h4>
                <p className="price" data-price="1590">Cena za osobę: {yachtsArr[0].price} PLN</p>
                <p >Fundusz turystyczny: 10 PLN</p>
                <p className="description">Liczba osób:</p>
                <input type="text" className="quantity" ></input>
                <p className="total">Łączna cena rezerwacji: <br></br> <span id="total"> {yachtsArr[0].price+ 10} PLN</span></p>
                <button className="btn">Przejdź do rezerwacji</button>
            </div>
        )
    }
}

export default CheckPrice





