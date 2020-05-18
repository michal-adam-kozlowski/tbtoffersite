// import React from 'react';
// import "./CheckPrice.scss";
// import $ from "jquery";


// export const checkYachtArr = [
//   {
//     price: 1590,
//     title: {
//       titleYacht: "Cały Jacht",
//       titleCabin: "Kabina",
//       titleSolo: "Solo"
//     }
//   },
//   {
//     price: 1790,
//     title: {
//       titleYacht: "Cały Jacht",
//       titleCabin: "Kabina",
//       titleSolo: "Solo"
//     }
//   },
//   {
//     price: 2090,
//     title: {
//       titleYacht: "Cały Jacht",
//       titleCabin: "Kabina",
//       titleSolo: "Solo"
//     }
//   },
//   {
//     price: 2090,
//     title: {
//       titleYacht: "Cały Jacht",
//       titleCabin: "Kabina",
//       titleSolo: "Solo"
//     }
//   },
//   {
//     price: 2290,
//     title: {
//       titleYacht: "Cały Jacht",
//       titleCabin: "Kabina",
//       titleSolo: "Solo"
//     }
//   }
// ]

// class CheckPriceWrapper extends React.Component {

//   constructor() {
//     super();

//     this.handleClick = this.handleClick.bind(this);

//     this.state = {
//       popupVisible: false,
//     };
//   }

//   handleClick() {

//     this.setState(prevState => ({
//       popupVisible: !prevState.popupVisible,
//     }));
//   }

//   render() {

//     return (
//       <div className="popover-container" ref={node => { this.node = node; }}>
//         <button id="choose" onClick={this.handleClick}>
//           <a href="#popOver">Sprawdź cenę</a>
//         </button>
//         {this.state.popupVisible && (
//           <div id="popOver" className="popover">
//             <div className="checkPriceWrapper" id="checkPriceWrapper" >
//               {/* <CheckPriceYacht content={this.props.content} /> */}
//               {/* <CheckPriceCabin content={this.props.content} /> */}
//               {/* <CheckPriceSolo content={this.props.content} /> */}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }



// export default CheckPriceWrapper





