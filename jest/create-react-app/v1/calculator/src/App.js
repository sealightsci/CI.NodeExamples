import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            number1: '',
            number2: '',
            result: ''
        }
    }

    render() {
        return (
            <div className="App">
                <form>
                    <input type="text" id="number1" value={this.state.number1} onChange={this.handleChange}/>
                    <input type="text" id="number2" value={this.state.number2} onChange={this.handleChange}/>
                    <button onClick={this.add.bind(this)}>add</button>
                    <br/>
                    <input type="text" id="result" value={this.state.result} onChange={this.handleChange}/>
                </form>
            </div>
        );
    }

    handleChange = e => {
        this.setState({[e.target.id]: parseInt(e.target.value)});
    }

    add = e => {
        this.setState({result : this.state.number1 + this.state.number2});
        e.preventDefault();
    }

    multiple(num1, num2){
        if(num2 ==1){
            console.log("meaningless")
        }
        return num1 * num2;
    }

    divide(number1, number2 = 1){
        if(number2 == 0){
            return 0;
        }
        else{
            return number1 / number2
        }
    }

    isDividedBy(num1, num2) {
        const result  = num1 % num2;
        return result == 0 ? true : false;
    }

    printAllNumbers(arg){
        for(let i =0; i < arg; i++){
            console.log(i);
        }
    }
}

export default App;
