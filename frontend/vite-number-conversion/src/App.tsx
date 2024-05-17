import { useState } from 'react'
import './App.css'
import SingleModule from "./pages/singleModule/SingleModule.tsx";
function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
          <Route path="/" element={<SingleModule />} />
      </Routes>
  )
}

export default App
