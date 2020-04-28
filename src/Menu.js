import React from 'react';
import './Menu.scss';
import $ from "jquery";

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});


class Menu extends React.Component {

  render() {
    return (
      <div className="navBar" id="navBar">
        <ul>
          <li><a href="#shortInfo">Ogólne</a></li>
          <li><a href="#main">Atrakcje</a></li>
          <li><a href="#maps">Mapa</a></li>
          <li><a href="#yachtMenu">Jachty</a></li>
          <li><a href="#payment">Płatności</a></li>
          <li><a href="#testimonials">Opinie</a></li>
          <li className="book"><a href="#book">Rezerwuj</a></li>
        </ul>
      </div>
    )
  }

}
export default Menu;
