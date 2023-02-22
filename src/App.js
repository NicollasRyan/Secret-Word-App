import { useCallback, useEffect, useState } from "react";

import { StartScreen } from "./components/StartScreen";
import { Game } from "./components/Game";
import { End } from "./components/End";
import { wordsLits } from "./data/words";

import "./App.css";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsLits);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [socre, setSocre] = useState(0);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickedWordAndCategory();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);
    console.log({ word, category });

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setgameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setgameStage(stages[2].name);
  };

  const retry = () => {
    setgameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          wrong={wrong}
          guessed={guessed}
          guesses={guesses}
          score={socre}
        />
      )}
      {gameStage === "end" && <End retry={retry} />}
    </div>
  );
}

export default App;
