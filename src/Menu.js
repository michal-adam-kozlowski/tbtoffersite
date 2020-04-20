import React from 'react';
import './Menu.scss';
import Hero from  "./Hero.js"

class Menu extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.myFunction);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.myFunction);
  }


render() {
return (
<div onscroll="myFunction">
<Hero />
  <div className="navBar" id="navBar">
    <ul>
      <li><a href=" ">Atrakcje</a></li>
      <li><a href="#maps">Mapa</a></li>
      <li><a href="#yachtMenu">Jachty</a></li>
      <li><a href="#payment">Płatności</a></li>
      <li><a href="#testimonials">Opinie</a></li>
      <li className="book"><a href="#book">Rezerwuj</a></li>
    </ul>
  </div>
</div>
  )
    }

    myFunction = () => {
      let navBar = document.getElementById("navBar");
      // let sticky = navBar.offsetTop;
      if (window.pageYOffset > 500) {
       navBar.classList.add("sticky")
     } else {navBar.classList.remove("sticky")}
    }
  }
export default Menu;
