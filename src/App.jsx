import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!   //underline is not seen
    </h1>
    <button className="btn">Button</button>
      </div>
     </>
  )
}

export default App
