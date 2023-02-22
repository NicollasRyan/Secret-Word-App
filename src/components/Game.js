import "./Game.css";

export function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  wrong,
  guessed,
  guesses,
  socre,
}) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {socre}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você tem {guesses} tentativa(s)</p>
      <div className="wordConatiner">
        {letters.map((letter, i) =>
          guessed.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
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
        {wrong.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
    </div>
  );
}
