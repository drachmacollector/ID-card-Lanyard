import { useState } from 'react'
import './App.css'
import Lanyard from './Lanyard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ height: '100vh', width: '100vw' }}>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
    </>
  );
}

export default App
