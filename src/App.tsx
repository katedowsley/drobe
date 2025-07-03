import { useState } from 'react'
import testShirt from '/test_shirt.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={testShirt} className="clothes-im" alt="test image"/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
