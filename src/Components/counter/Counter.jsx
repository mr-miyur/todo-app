import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'


class Counter extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }



    render() {
        return (
            <div className="counter">
                <CounterButtons by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButtons by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButtons by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="counter">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )

    }

    increment(by) {
        //console.log(`invoke increment from parent ${by}`)
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }
    decrement(by) {
        //console.log('invoke decrement from parent')
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        )
    }

    reset(by) {
        //console.log('invoke decrement from parent')
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return { counter: 0}
            }
        )
    }


}


class CounterButtons extends Component {

    // constructor() {
    //     super()
    //     // this.state ={
    //     //     counter : 0
    //     // }

    //     this.increment = this.increment.bind(this)
    //     this.decrement = this.decrement.bind(this)
    // }

    render() {
        return (
            <div className="Counter">
                <button onClick={()=> this.props.incrementMethod(this.props.by)}>+{this.props.by} </button>
                <button onClick={()=> this.props.decrementMethod(this.props.by)}>-{this.props.by} </button>
                {/*<span className="counter">{this.state.counter}</span>*/}
            </div>
        );
    }

    // increment() {
    //     //console.log('invoke increment')
    //     //this.state.counter++;
    //     // this.setState(
    //     // {
    //     // counter: this.state.counter+this.props.by
    //     // }
    //     // )
    //     this.props.incrementMethod(this.props.by)
    // }
    // decrement() {
    //     //console.log('invoke increment')
    //     //this.state.counter++;
    //     // this.setState(
    //     //     {
    //     //         counter: this.state.counter-this.props.by
    //     //     }
    //     // )
    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButtons.defalutProps = {
    by: 1
}

CounterButtons.propTypes = {
    by: PropTypes.number
}

export default Counter