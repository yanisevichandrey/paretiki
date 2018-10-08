import React, { Component } from 'react';
import './App.css';
import Currency from './components/Currency/Currency';
import InputComponent from './components/InputComponent/InputComponent';

class App extends Component {

  state = {
    currencies: [
      { id: 1, img: 'https://endotech.io/img/coinicon/BTC.png', nameCur: 'BTC', priceUsd: 6800, priceUah: 150000, priceRub: 340000 },
      { id: 2, img: 'https://endotech.io/img/coinicon/ETH.png', nameCur: 'ETH', priceUsd: 250, priceUah: 7400, priceRub: 16000 },
      { id: 3, img: 'https://endotech.io/img/coinicon/XRP.png', nameCur: 'XRP', priceUsd: 0.2500, priceUah: 7.0231, priceRub: 17.228 }
    ],
    currCrypta: 1
  }

  async componentDidMount() {
    const data = await this.getPrivatCurs();
    this.changeStateCurr(data);
  }

  getPrivatCurs = () => {
    return fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(response => {
        return response.json();
      })
  }

  changeStateCurr = (data) => {
    this.setState((prevState) => {
      console.log('------', prevState.currencies);
      console.log('------', data);
      return {
        currencies: prevState.currencies.map(cur => ({
          ...cur,
          priceUah: cur.priceUsd * data[0].buy,
          priceRub: cur.priceUsd / data[2].buy * data[0].buy

        }))
      }
    })
  }

  handlerCurr = (index) => () => {
    this.setState({ currCrypta: index });
  }

  render() {

    const currsList = this.state.currencies.map((curr, index) => {
      return <Currency
        key={curr.id}
        nameCur={curr.nameCur}
        priceUsd={curr.priceUsd}
        priceUah={curr.priceUah}
        priceRub={curr.priceRub}
        img={curr.img}
        clicked={this.handlerCurr(index)} />
    })

    return (
      <div className="App">
        <div className="flex_between">
          {currsList}
        </div>
        <InputComponent
          nameCur={this.state.currencies[this.state.currCrypta].nameCur}
          currencies={this.state.currencies}
          currCrypta={this.state.currCrypta}
          cursPrivat={this.state.cursPrivat} />
      </div>
    );
  }
}

export default App;
