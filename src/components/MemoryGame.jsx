import {Scoreboard} from "./Scoreboard.jsx";
import {Card} from "./Card.jsx";

export const MemoryGame = () => {
    return (
        <div className="memory-game">
            Memory Game
            <div className="memory-game__content">
                <h1>Memory Game</h1>
                <Scoreboard />
                <div className="memory-game__cards">
                    <Card />
                </div>
            </div>
        </div>
    )
}