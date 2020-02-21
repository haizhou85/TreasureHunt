import React, { Component } from 'react';
import Square from './square.js'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
        tempSize: "",
        startingIcon: "?",
      size: 3,
      gameBoard : [],
      treasure: [7],
      bomb: [4],
      clicks: 0,
      clickedSquares: [],
      displayBoard: ""
    }
  this.state.gameBoard = this.buildBoard(this.state.size)
  this.state.displayBoard = this.generateDisplayboard(this.state.gameBoard, this.state.size)
  }


  buildBoard = (num) => {
    let newRow = []
    for (let i = 0; i < num**2; i++){
      newRow = newRow.concat(0)
    }

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


     let treasurePosistion = [Math.floor(Math.random()*(num**2))]
     console.log(treasurePosistion)
     console.log()

     let bombLocations = []
     for(let b=0; b<num-2; b++){
         let bombsPosistion = [Math.floor(Math.random()*(num**2))]
         //console.log(bombsPosistion)
         if(!bombLocations.includes(bombsPosistion) && bombsPosistion !== treasurePosistion){
               bombLocations = bombLocations.concat(bombsPosistion)
         }
         else{ b--; }


     }


     this.setState({
         displayBoard: gameBoard,
         treasure: treasurePosistion,
         bomb: bombLocations
     })

    return newRow
  }

  generateDisplayboard = (gameBoard, size, newIcon = "?") => {
      //let { gameBoard, size } = this.state
      //newIcon = String.fromCharCode(Math.floor(Math.random()*25)+65);
      console.log(newIcon)
      for (let i = 0; i < gameBoard.length; i++){
          gameBoard[i] = (
              <>
                  <Square
                  index = {i}
                  treasure = { this.state.treasure }
                  bomb = { this.state.bomb }
                  handleClick = { this.handleClick }
                  length = { this.squareLength(size) }
                  icon={newIcon}
                  />
              </>)
       }
      return gameBoard
  }

  resetBoard = () => {

  }

  handleClick = (index) => {
     let { clicks, clickedSquares, gameBoard } = this.state
    clickedSquares.push(index)
    this.setState({clickedSquares:clickedSquares})
    let clicked = new Set(this.state.clickedSquares)
    clicks = clicked.size
    this.setState({ clicks: clicks })


    //let newIcon = String.fromCharCode(Math.floor(Math.random()*25)+65);
    let newIcon = "!"
    if (this.state.treasure.includes(index)){
        newIcon = "T"
    } else if (this.state.bomb.includes(index)){
        newIcon = "B"
    }
    gameBoard[index] = (
        <>
            <Square
            index = {index}
            treasure = { this.state.treasure }
            bomb = { this.state.bomb }
            handleClick = { this.handleClick }
            length = { this.squareLength(this.state.size) }
            icon={newIcon}
            />
        </>)


    if (this.state.treasure.includes(index)){
      return alert("you found treasure")
    }
    if (this.state.bomb.includes(index)){
      return alert("wasted")
    }
  }


  squareLength = (num) => {
    return 500/num - 2
  }

  setSize = () =>{
      let num = parseInt(this.state.tempSize)
      if(!isNaN(num) && num < 10 && num > 2){
          // Generate treasure
          let treasurePosistion = [Math.floor(Math.random()*(num**2))]
          console.log(treasurePosistion)
          console.log()

          let bombLocations = []
          for(let b=0; b<num-2; b++){
              let bombsPosistion = [Math.floor(Math.random()*(num**2))]
              //console.log(bombsPosistion)
              if(!bombLocations.includes(bombsPosistion) && bombsPosistion !== treasurePosistion){
                    bombLocations = bombLocations.concat(bombsPosistion)
              }
              else{ b--; }


          }
          console.log(bombLocations)

          let newBoard = this.buildBoard(num)
          this.setState({
              size: num,
              gameBoard: newBoard,
              treasure: treasurePosistion,
              bomb: bombLocations,
              clicks: 0,
              clickedSquares: [],
              displayBoard: this.generateDisplayboard(newBoard,num)
          })
      }
  }

  handleChange = (event) => {
      this.setState({ tempSize: event.target.value })
      console.log(event.target.value)
  }



  render(){


    return(
        <div>
            <div id="board">
                { this.state.displayBoard }
            </div>
            <div>
                <input onChange={this.handleChange} placeholder="sdfgsdfgs"/>
                <button onClick={this.setSize}>Reset with Size</button>
                <div>{this.state.clicks}</div>
            </div>
      </div>
    )
  }
}


export default Board;
