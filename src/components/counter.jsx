import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0,
    tags : ["tags 1","tags 2", "tags 3"],
  };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  handleIncrement = () => {
    this.setState({
      count : this.state.count+1,
    })
  }
  render(){
    return (
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-primary btn-sm" onClick={this.handleIncrement}>Increment</button>


        </div>
    );
  }
  getBadgeClasses(){
    let classes = "badge m-1  badge-";
    // if (this.state.count === 0) {
    //     classes += "warning";
    // }else {
    //   classes += "primary";
    // };
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
