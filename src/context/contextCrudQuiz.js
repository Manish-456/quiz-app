import { createContext, useContext, useState } from "react";
import questionAnswer from "../questionApi";
const contextCrudQuiz = createContext()

export const ContextProvider = ({children}) => {
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

 const value = {
  score,
  questionAnswer,
  currentQuestion,
  showScore,
  congrats,
  answerOptionHandler
 }
 return <contextCrudQuiz.Provider value={value}>
  {children}
 </contextCrudQuiz.Provider>
}

export function useContextCrud() {
 return useContext(contextCrudQuiz);
}
