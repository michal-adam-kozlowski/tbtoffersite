import React from 'react';
import './PayAccordion.scss';

const paymentInfo = [
  {
    title: 'I rata - 30% ceny',
    paragraph: 'W ciągu 24 godzin od złożenia rezerwacji należy wpłacić zaliczkę wysokości 30%* całej ceny wycieczki. Wpłata zaliczki stanowi potwierdzenie rezerwacji. W przypadku niewpłacenia zaliczki rezerwacja zostanie anulowana. W okresie promocji First Minute zaliczka wynosi tylko 200 PLN.'
  },
  {
    title: 'II rata - 30% ceny',
    paragraph: 'Najpóźniej 60 dni przed wyjazdem należy dopłacić drugie 30% ceny.'
  },
  {
    title: 'III rata - 40% ceny',
    paragraph: 'Najpóźniej 30 dni przed rozpoczęciem rejsu należy wpłacić pozostałą kwotę. Przy okazji warto sprawdzić, czy ostatecznie zaznaczyłeś wszystkie dodatkowe opcje, które chciałeś i czy poprawnie podałeś wszystkie dane'
  },
  {
    title: 'Raty PayU',
    paragraph: 'Alternatywnie możesz skorzystać z rat PayU.'
  }
]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'accordionWrapper' }}>
        <ul {...{ className: 'accordionList' }}>
          {paymentInfo.map((paymentInfo, key) => {
            return (
              <li {...{ className: 'accordionList-item', key }}>
                <AccordionItem {...paymentInfo} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }

  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this

    return (
      <div
        {...{
          className: `accordionItem, ${opened && 'accordionItem--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordionItem-line' }}>
          <h3 {...{ className: 'accordionItem-title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordionItem-icon' }}/>
        </div>
          <div {...{ className: 'accordionItem-inner' }}>
            <div {...{ className: 'accordionItem-content' }}>
              <p {...{ className: 'accordionItem-paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default Accordion
