import React, { Component } from 'react'
import Board from './Board';
import Social from './Social';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blueTurn: true,
            cells: Array(9).fill(null),
            winner: null,
            isGameOver: false,
            randomMode: false,
        }
        this.keyboardListener = this.keyboardListener.bind(this);
    }

    keyboardListener(event) {
        switch(event.key) {
            case "q":
                this.handleClick(0);
                break;
            case "w":
                this.handleClick(1);
                break;
            case "e":
                this.handleClick(2);
                break;
            case "a":
                this.handleClick(3);
                break;
            case "s":
                this.handleClick(4);
                break;
            case "d":
                this.handleClick(5);
                break;
            case "z":
                this.handleClick(6);
                break;
            case "x":
                this.handleClick(7);
                break;
            case "c":
                this.handleClick(8);
                break;
            case "r":
                this.restart();
                break;
            case "t":
                this.toggleRandom();
                break;
            default:
                break;
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.keyboardListener, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.keyboardListener, false);
    }

    restart() {
        this.setState({
            blueTurn: true,
            cells : Array(9).fill(null),
            winner: null,
            isGameOver: false,
        })
    }

    toggleRandom() {
        this.setState({
            randomMode: !this.state.randomMode,
        })
    }

    generateRandomEmptyIndex(cells) {
        let i;
        // generate random i between 0 to 8 until an empty index is obtained
        do {
            i = Math.floor(Math.random() * 9);
        } while (cells[i]);

        return i;
    }

    handleClick(i) {
        const cells = this.state.cells.slice();

        if (this.state.isGameOver) {
            alert("Game has ended. Click on Start over to play again!");
            return;
        }

        if (this.state.randomMode) {
            i = this.generateRandomEmptyIndex(cells);
        }

        if (cells[i]) {
            alert("Cell is already filled. Please select an empty cell.");
            return;
        }

        cells[i] = this.state.blueTurn ? 'Blue' : 'Yellow';

        let isGameOver = getIsGameOver(cells);
        const winner = getWinner(cells);
        if (winner) {
            isGameOver = true;
        }

        this.setState({
            cells: cells,
            blueTurn: !this.state.blueTurn,
            winner: winner,
            isGameOver: isGameOver,
        });
    }

    render() {
        const winner = this.state.winner;
        const isGameOver = this.state.isGameOver;
        const randomMode = this.state.randomMode;

        let status;
        if (isGameOver) {
            status = winner ? winner + " won!" : "Tie";
        } else {
            status = (this.state.blueTurn ? 'Blue' : 'Yellow') + "'s Turn";
        }
        if (randomMode) {
            status += " (Random)";
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        cells={this.state.cells} />
                </div>
                <div className="sidebar">
                    <div className="status">{status}</div>
                    <button className="sidebar-btn" onClick={() => { this.restart() }}>
                        {'Start over'}
                    </button>
                    <button className="sidebar-btn" onClick={() => { this.toggleRandom() }}>
                        {randomMode ? "Turn random mode off" : "Turn random mode on"}
                    </button>
                    <div className="social">
                        {winner && <Social winner={winner}/>}
                    </div>
                </div>
            </div>
        );
    }
}

function getWinner(cells) {
    // lines represents all possible winning combinations
    const lines = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonals
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            // a win combination, return name of winner
            return cells[a];
        }
    }

    return null;
}

function getIsGameOver(cells) {
    // check if all cells are filled
    let isGameOver = true;

    cells.forEach((cells) => {
        if (cells == null) {
            isGameOver = false;
        }
    })

    return isGameOver;
}
