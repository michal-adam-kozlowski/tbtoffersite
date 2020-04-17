import React from 'react';
import './Menu.scss';

  class Menu extends React.Component {

  render() {
    return (
          <nav className="menuComponent" id="menuComponent" >
            <div className="navContent" ref={this.nav}>
            <ul class="menuList">
                <li className="menuItem"><a href="/#highLights">Atrakcje</a></li>
                <li className="menuItem"><a href="/#maps">Mapa</a></li>
                <li className="menuItem"><a href="/#reservation">Rezerwacje</a></li>
                <li className="menuItem"><a href="/#testimonials">Opinie</a></li>
                <li className="menuItem btn"><a href="/#book">Rezerwuj</a></li>

            </ul>
            </div>
          </nav>
)}}

export default Menu
