import React, { Component } from "react";

export default class Clicker extends Component {
    state={
        num:1
    }
    handleClick=()=>{
        let random=Math.floor(Math.random()*10)
        this.setState({num:random})
    }
  render() {
      let output;
      if(this.state.num !== 7){
        output=<button onClick={this.handleClick}>Click</button>
      }
      else output=<h2>You Win</h2>
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {output}

      </div>
    );
  }
}
