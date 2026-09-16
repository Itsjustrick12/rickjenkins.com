import { useState } from 'react'
import freaky from './assets/freaky.jpg'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <img src={freaky} alt="gay little monkey" width={500} height={500}/>
        </div>
        <div>
          <h1>Welcome to rickjenkins.com</h1>
          <p>
            As a reward for you being early, you get to look at this picture of me posing like a little 🏳️‍🌈 boy
          </p>
        </div>
      </section>
    </>
  )
}

export default App
