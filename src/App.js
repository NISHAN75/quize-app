import { useState } from "react";
import "./App.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  {
    questionText: "What language is spoken in Brazil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English ", isCorrect: false },
      { answerText: "French ", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the highest and lowest life expectancy in the world?",
    answerOptions: [
      { answerText: "Australia and Afghanistan", isCorrect: true },
      { answerText: "japan and sierra", isCorrect: false },
      { answerText: "Italy", isCorrect: false },
      { answerText: "Brasil", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the iPhone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practistin what you learn", isCorrect: true },
      { answerText: "watching video", isCorrect: false },
      { answerText: "reading", isCorrect: false },
      { answerText: "writing", isCorrect: false },
    ],
  }
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [tureQ,setTureQ]=useState(0)
  const [falseQ,setFalseQ]=useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 5);
      setTureQ(tureQ + 25);
      const now =tureQ;
    }else{
      setFalseQ(falseQ + 25)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }
  

  return (
    <div className="app">
      <div>
        <h2 className="text-center">Points</h2>
        <p className="text-center">{score}</p>
      </div>
      <div className="d-flex justify-content-center mb-3">
      <div className="w-50">
        <span className="p-head">Right Ans</span>
        <ProgressBar variant="success"  now={tureQ} className="bg-gradient" />
      </div>
      <div className="w-50 p-bar">
        <span className="p-head">Wrong Ans</span>
        <ProgressBar variant="danger" now={falseQ} />
      </div>
      </div>

      {showScore ? (
        <div className="score-section text-center">
          You Scored {score} Points Out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question{currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
