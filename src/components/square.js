import React, { Component } from 'react';

class Square extends Component{
  constructor(props){
    super(props)
    this.state={
      icon : "?"
    }
  }
click = () => {
  let n = this.props.index
  this.props.handleClick(n)
  if (this.props.treasure.includes(n)){
      this.setState({icon : "X"})
    }else if(this.props.bomb.includes(n)){
      this.setState({icon : "XXX"})
    }else{
      this.setState({icon : "O"})
    }
}


  render(){
    return(
      <div id = "square" onClick = { this.click }>
      {this.props.index}, {this.state.icon}
      </div>
    )
  }
}
export default Square
