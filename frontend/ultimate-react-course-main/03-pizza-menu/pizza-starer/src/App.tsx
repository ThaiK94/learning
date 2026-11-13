import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { PizzaHomePage } from './pages/home-page/PizzaHomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PizzaHomePage />
    </>
  )
}

export default App
