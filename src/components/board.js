import React, { Component } from 'react';
import Square from './square.js'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      size: 4,
      gameBoard : [],
      treasure: [3,8],
      bomb: [4]
    }
  this.state.gameBoard = this.buildBoard(this.state.size)
  }
  buildBoard = (num) => {
    let n = num**2
    let board = []
    for (let i = 0; i < n; i++){
      board = board.concat(0)
    }
    return board
  }

  handleClick = (index) => {
    if (this.state.treasure.includes(index)){
      return alert("you found treasure")
    }
    if (this.state.bomb.includes(index)){
      return alert("wasted")
    }

  }
  render(){
  let { gameBoard, size } = this.state
  for (let i = 0; i < gameBoard.length; i++){
      gameBoard[i] = <Square
      index = {i}
      treasure = { this.state.treasure }
      bomb = { this.state.bomb }
      handleClick = { this.handleClick }
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
