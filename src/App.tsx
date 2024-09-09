import './App.css'
import Navbar from './components/Navbar'
import NewStudent from './components/NewStudent'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NewStudent' element={<NewStudent />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
