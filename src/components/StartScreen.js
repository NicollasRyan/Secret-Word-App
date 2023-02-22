import "./StartScreen.css";

export function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão para iniciar o jogo!</p>
      <button onClick={startGame}>Começar jogar</button>
    </div>
  );
}
