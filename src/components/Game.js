import "./Game.css";

export function Game({ verifyLetter }) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordConatiner">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterConatiner">
        <p>Tente adivinhar um letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="weongLetters">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
}
