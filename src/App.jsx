import { Route, Routes } from 'react-router-dom'
import Home from './tabs/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  )
}

export default App
