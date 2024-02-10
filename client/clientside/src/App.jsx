import { useState } from 'react'


function App() {

  const [count, setCount] = useState(null)

  fetch('/api/name/Dhakad').then((data) => data.json()).then((response) => setCount(response.message ))
  
  return (
    <>
    <h1>ajay {count}</h1>
    </>
  )
}

export default App
