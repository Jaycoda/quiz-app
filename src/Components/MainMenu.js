import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../styles.css";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
