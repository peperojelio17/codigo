import { useState } from "react"

const TURNS = {
  X : 'x',
  O : 'o'
}

const Square = ({children,isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () =>{
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winer, setWiner] = useState(null) //null es que no hay ganador y false es que es un empate

  const updateBoard = (index) => {
    // Este if sirve para evitar que se sobreescriban las casillas
    // if (board[index] != null) return esro es lo mismo que lo de abajo pero aca se nota mejor la idea
    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>ta-te-ti</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected = {turn ===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected = {turn ===TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
