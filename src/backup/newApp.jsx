import { useState } from "react";
import "./App.css";
import questionAnswer from "../questionApi";
function App() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [congrats, setCongrats] = useState(" ")
  function answerOptionHandler(correct) {
    if(correct){
      setScore(score + 1)
     
    }
  
    score === questionAnswer.length || score === questionAnswer.length - 1? setCongrats("congratulations") : setCongrats("Try again")
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionAnswer.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="score-container"> {showScore ? (<div className="score">
          <h2 className="h2">{congrats}</h2>
          <h3 className="h2"> You scored {score} out of {questionAnswer.length}
          
        </h3>
        </div> ): (
      <div className="container">
       
         
        <div className="inner">
          <div className="col">
         
          <h1 className="color">
            {currentQuestion + 1}/{questionAnswer.length}
          </h1>   
          </div>
          <div className="left">{questionAnswer[currentQuestion].question}</div>
          <div className="right">
            {questionAnswer[currentQuestion].answers.map((answers) => {
              return (
              
                  <button
                    type="button"
                    onClick={() => {answerOptionHandler(answers.isCorrect)}}
                    className="button"
                    key={answers.option}
                  >
                    {answers.option}
                  </button>
             
              );
            })}
          </div>
        </div> 

      </div>)
}
    </div>
  );
}

export default App;
