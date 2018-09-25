import React, {Component} from 'react';
import './InputComponent.css';

class InputComponent extends Component {

    state = {
        btns: [
            {id: 1, nameBtn: 'UAH'},
            {id: 2, nameBtn: 'USD'},
            {id: 3, nameBtn: 'RUB'}
        ],
        currBtn: 0,
        active: null,
        inputNumber: 5,
        currValue: 1
    }

    handleBtns = (index) => {
        this.setState({currBtn: index})
    }

    inputChange = (event) => {
        this.setState({inputNumber: event.target.value});
    }

   render(){

     let price = null;
     if(this.state.currBtn === 0){
         price = (
            <span>
                {(this.state.inputNumber * this.props.currencies[this.props.currCrypta].priceUah).toFixed(2)}
            </span>
         );
     } else if(this.state.currBtn === 1){
        price = (
           <span>
               {(this.state.inputNumber * this.props.currencies[this.props.currCrypta].priceUsd).toFixed(2)}
           </span>
        );
    } else if(this.state.currBtn === 2){
        price = (
           <span>
               {(this.state.inputNumber * this.props.currencies[this.props.currCrypta].priceRub).toFixed(2)}
           </span>
        );
    }

    return(
        <div className="inputComponent">
            <div className="inputComponent_title">Selected coin: {this.props.nameCur}</div>
            <div className="wrap_input">
                <div>Volume:</div>
                <input type="text" onChange={this.inputChange} value={this.state.inputNumber} />
            </div>
            <div className="flex_between w250 m_for_btns">
                {
                    this.state.btns.map((btn, index) => {
                       return <div className="btn_price" onClick={() => this.handleBtns(index)} 
                       key={btn.id}>{btn.nameBtn}</div>
                    })
                }
            </div>
            <div className="total">
                <span className="bold">{this.state.inputNumber}{this.props.nameCur}</span> will be <span className="bold"> 
                {price} 
                </span> in <span className="bold">{this.state.btns[this.state.currBtn].nameBtn}</span>
            </div>
        </div>
    )
   }
}

export default InputComponent;