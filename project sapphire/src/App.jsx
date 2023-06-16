import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />}>
            <Route index element={<About />} />
            <Route path=':user'element={<Profiles/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App