import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Settings from './components/Settings'

function App() {

  const [passwordDisplay, setPasswordDisplay] = useState('')

  return (
    <>
      <div className='app'>

        <p className='app-name'>Password Generator</p>

        <Display passwordDisplay={passwordDisplay} />

        <Settings setPasswordDisplay={setPasswordDisplay}/>

      </div>
      
    </>
  )
}

export default App
