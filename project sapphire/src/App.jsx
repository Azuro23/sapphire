import { useState } from 'react'
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
