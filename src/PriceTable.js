import React from 'react';
import "./PriceTable.scss";

// window.onload = function() {

// let first = document.querySelector(".firstTick");

// first.addEventListener("mouseover", mouseMove);
// function mouseMove(){
//     first.innerHTML = "jakiś tekst"
// };

// first.addEventListener("mouseleave", mouseOut);
// function mouseOut(){
//     first.removeEventListener("mouseover", mouseMove);
// };

// }


class PriceTable extends React.Component {
    render() {
        return (
            <div className="priceTable">
                <div className="firstColumn">
                    <p><i class={this.props.text.class}></i>{this.props.text.cell1}</p>
                    <p><i class={this.props.text.class}></i>{this.props.text.cell2}</p>
                    <p><i class={this.props.text.class}></i>{this.props.text.cell}</p>
                </div >
                <div className="secondColumn">
                    <p><i class={this.props.text.class}></i>{this.props.text.cell4}</p>
                    <p><i class={this.props.text.class}></i>{this.props.text.cell3}</p>
                </div>
                <div className="thirdColumn">
                    <p><i class={this.props.text.class}></i>{this.props.text.cell5}</p>
                    <p><i class={this.props.text.class}></i>{this.props.text.cell6}</p>
                </div>
            </div>
        )
    }
}


export default PriceTable;



