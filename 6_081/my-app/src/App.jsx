import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordStrengthChecker from './components/passwordstrengthchecker'
import HelloWorld from './components/helloworld'
import Greeting from './components/greetings'
import Timer from './components/timer'
import Counter from './components/counter'


function App() {
  return (
    <>
      
      <HelloWorld />
      <Greeting name="Madhulika" />
      <Counter />
      <PasswordStrengthChecker />
      <Timer />
      
    </>
  )
}

export default App
