import { useState } from 'react';
import React from 'react';
import './CSS/caro.css';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner (squares) || squares[i]) {
             return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares [i] = 'X';
        } else {
            nextSquares [i] = '0';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner (squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player:' + (xIsNext ? 'X': '0');
    }

    return (
        <>
            <div className="status">{status}</div>
           <div className="board-row">
                <Square value={squares [0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares [1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares [2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares [3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares [4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares [5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares [6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares [7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares [8]} onSquareClick={() => handleClick(8)} />
                <Square value={squares [9]} onSquareClick={() => handleClick(9)} />
                <Square value={squares [10]} onSquareClick={() => handleClick(10)} />
                <Square value={squares [11]} onSquareClick={() => handleClick(11)} />
            </div>
            <div className="board-row">
                <Square value={squares [12]} onSquareClick={() => handleClick(12)} />
                <Square value={squares [13]} onSquareClick={() => handleClick(13)} />
                <Square value={squares [14]} onSquareClick={() => handleClick(14)} />
                <Square value={squares [15]} onSquareClick={() => handleClick(15)} />
                <Square value={squares [16]} onSquareClick={() => handleClick(16)} />
                <Square value={squares [17]} onSquareClick={() => handleClick(17)} />
            </div>
            <div className="board-row">
                <Square value={squares [18]} onSquareClick={() => handleClick(18)} />
                <Square value={squares [19]} onSquareClick={() => handleClick(19)} />
                <Square value={squares [20]} onSquareClick={() => handleClick(20)} />
                <Square value={squares [21]} onSquareClick={() => handleClick(21)} />
                <Square value={squares [22]} onSquareClick={() => handleClick(22)} />
                <Square value={squares [23]} onSquareClick={() => handleClick(23)} />
            </div>
            <div className="board-row">
                <Square value={squares [24]} onSquareClick={() => handleClick(24)} />
                <Square value={squares [25]} onSquareClick={() => handleClick(25)} />
                <Square value={squares [26]} onSquareClick={() => handleClick(26)} />
                <Square value={squares [27]} onSquareClick={() => handleClick(27)} />
                <Square value={squares [28]} onSquareClick={() => handleClick(28)} />
                <Square value={squares [29]} onSquareClick={() => handleClick(29)} />
            </div>
            <div className="board-row">
                <Square value={squares [30]} onSquareClick={() => handleClick(30)} />
                <Square value={squares [31]} onSquareClick={() => handleClick(31)} />
                <Square value={squares [32]} onSquareClick={() => handleClick(32)} />
                <Square value={squares [33]} onSquareClick={() => handleClick(33)} />
                <Square value={squares [34]} onSquareClick={() => handleClick(34)} />
                <Square value={squares [35]} onSquareClick={() => handleClick(35)} />
            </div>
        </>
    );
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(36).fill(null)]); 
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history [currentMove];

    function handlePlay (nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove (nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function jumpTo (nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description= 'Go to move #' + move;
        } else {
            description= 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo (move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
        );
        }
        function calculateWinner (squares) {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines [i];
        if (squares [a] && squares [a] === squares [b] && squares [a] === squares [c]){
            return squares [a];
        }
    }
    return null;
}
