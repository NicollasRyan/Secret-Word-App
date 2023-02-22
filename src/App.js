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

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <End />}
    </div>
  );
}

export default App;
