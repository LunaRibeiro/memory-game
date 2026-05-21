import {Scoreboard} from "./Scoreboard.jsx";
import {Card} from "./Card.jsx";
import {pairsOfCards} from "../constants/cards.js";

export const MemoryGame = () => {
    return (
        <div className="memory-game">
            Memory Game
            <div className="memory-game__content">
                <h1>Memory Game</h1>
                <Scoreboard />
                <div className="memory-game__cards">
                    {pairsOfCards.map((card) => <Card key={card.id} {...card} />)}
                </div>
            </div>
        </div>
    )
}