import React from 'react';
import './PayAccordion.scss';


class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	tabs: [
      	{
        	id: 1,
          title: "I rata - do 24 godzin od złożenia rezerwacji",
          content: "W ciągu 24 godzin od złożenia rezerwacji należy wpłacić zaliczkę wysokości 30%* całej ceny wycieczki. Wpłata zaliczki stanowi potwierdzenie rezerwacji. W przypadku niewpłacenia zaliczki rezerwacja zostanie anulowana. W okresie promocji First Minute zaliczka wynosi tylko 200 PLN.",
          active: false
        },

        {
        	id: 2,
          title: "II rata - 60 dni przed rejsem",
          content: "Najpóźniej 60 dni przed wyjazdem należy dopłacić drugie 30% ceny.",
          active: false
        },
        {
        	id: 3,
          title: "III rata - 30 dni przed rejsem",
          content: "Najpóźniej 30 dni przed rozpoczęciem rejsu należy wpłacić pozostałą kwotę. Przy okazji warto sprawdzić, czy ostatecznie zaznaczyłeś wszystkie dodatkowe opcje, które chciałeś i czy poprawnie podałeś wszystkie dane",
          active: false
        }
      ]
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.updateTabs = this.updateTabs.bind(this);
  }

  updateTabs(id){
  	let tabs  = this.state.tabs;
    let newtabs = tabs.map((tab, index)=>{
      if(tab.id == id){
        if(tab.active == true){
        	tab.active = false;
        }else{
        	tab.active = true;
        }
      }else{
        tab.active = false;
      }
      return tab;
    });
    return newtabs;
  }

  handleTabClick(id){
    this.setState({tabs: this.updateTabs(id)});
  }

  render() {
  	const tabsArray = this.state.tabs;
    return (
      <div>
        <div id="accordion">
           {
           		tabsArray.map((tab,index)=>{
              	return <Tab key={index} id={tab.id} handleclick={this.handleTabClick} title={tab.title} content={tab.content} active={tab.active} />
              })
           }
        </div>
      </div>
    )
  }
}

class Tab extends React.Component{
  render(){
  	return(
    	<div className="tab">
    	   <div className="title" onClick={()=>{
         this.props.handleclick(this.props.id)}}>
    	     <span>{this.props.title}</span>
           <i className={this.props.active? "fas fa-minus" : "fas fa-plus"}></i>
    	   </div>
         <div className={this.props.active ? "content show" : "content hide"}>
            {this.props.content}
         </div>
    	</div>
    )
  }
}

export default Accordion
