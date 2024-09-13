import './App.css'
import Navbar from './components/Navbar'
import NewStudent from './components/NewStudent'
import Home from './components/Home'
import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { data } from './utils/data'

function App() {
const [students, setStudents] = useState(data);

  return (
    <Router>
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home students={students} />} />
        <Route path='/NewStudent' element={<NewStudent students={students} setStudents={setStudents}/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
