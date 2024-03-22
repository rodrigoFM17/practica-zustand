import { useState } from 'react'
import './App.css'
import { JavaScriptLogo } from './assets/JavaScriptLogo'
import { useQuestionStore } from './store/questions'
import Game from './components/Game/Game'

function App() {
  const questions = useQuestionStore(state => state.questions)
  console.log(questions)
  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    fetchQuestions(5)
  }

  return (
    <>
      <JavaScriptLogo color='yellow'/>
      <h1>JavaScript Quest</h1>
      <button onClick={handleClick}>
        iniciar cuestionario  
      </button>

      {
        questions.length > 0 ? <Game /> : null
      }
    </>
  )
}

export default App
