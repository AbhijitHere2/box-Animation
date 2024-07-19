import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from './components/Steps/Steps'
import Box from './components/Box/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Steps/> */}
 <Box/>
    </>
  )
}

export default App
