import React from 'react'
import { useContextCrud } from './context/contextCrudQuiz'
const Main = () => {
const { score, questionAnswer, currentQuestion, showScore, congrats, answerOptionHandler } = useContextCrud()

  return (
    <div>
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
    </div>
  )
}

export default Main
