import React from "react";
import "./App.css";
import { ContextProvider } from "./context/contextCrudQuiz";
import Main from "./Main";

function App() {
  return (
    <div>
      <ContextProvider>
      <Main />
      </ContextProvider>
    </div>
  );
}

export default App;
