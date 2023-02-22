import "./End.css";

export function End({ retry }) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Reniciar</button>
    </div>
  );
}
