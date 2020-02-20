import React, { Component } from 'react';
import Square from './square.js'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      size: 7,
      gameBoard : [],
      treasure: [3,8],
      bomb: [4]
    }
  this.state.gameBoard = this.buildBoard(this.state.size)
  }
  buildBoard = (num) => {
    let newRow = []
    for (let i = 0; i < num**2; i++){
      newRow = newRow.concat(0)
    }
    return newRow
  }

  handleClick = (index) => {
    if (this.state.treasure.includes(index)){
      return alert("you found treasure")
    }
    if (this.state.bomb.includes(index)){
      return alert("wasted")
    }

  }
  squareLength = (num) => {
    return 800/num - 2
  }
  render(){
  let { gameBoard, size } = this.state

  for (let i = 0; i < gameBoard.length; i++){
      gameBoard[i] = <Square
      index = {i}
      treasure = { this.state.treasure }
      bomb = { this.state.bomb }
      handleClick = { this.handleClick }
      length = { this.squareLength(size) }
      />
    }

    return(
      <div id="board">
      { gameBoard }
      </div>
    )
  }
}


export default Board;
