import React, { Component } from 'react';

class Square extends Component{
  constructor(props){
    super(props)
    this.state={
      icon : props.icon
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
      <div id = "square" onClick = { this.click } style={{height: this.props.length},{width:this.props.length}}>
      {this.props.index}, {this.props.icon}
      </div>
    )
  }
}
export default Square
